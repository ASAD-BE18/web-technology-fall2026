// Lab 2 tests — zero external dependencies (Node.js 18+).
// Run from the repository root with:
//   node --test assignments/lab02-tables-forms-semantic/tests/test.js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Strip comments first, so TODO comments can never satisfy a check.
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");

// The inner HTML of every <tag>...</tag> (the tags tested here are never nested in themselves).
function blocks(source, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  return [...source.matchAll(re)].map((m) => m[1]);
}
const text = (s) => s.replace(/<[^>]+>/g, "").trim();
function attrsOf(tag) {
  const attrs = {};
  for (const m of tag.matchAll(/([a-zA-Z-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g)) {
    attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4];
  }
  return attrs;
}
const tagsOf = (source, tag) => (source.match(new RegExp(`<${tag}\\b[^>]*>`, "gi")) || []).map(attrsOf);
const body = blocks(html, "body")[0] || "";

// ---------- B1: semantic structure ----------

test("B1.1: no <div> remains in the page", () => {
  const n = (body.match(/<div\b/gi) || []).length;
  assert.equal(n, 0, `found ${n} <div> tag(s) — replace each one with a semantic tag`);
});

test("B1.2: a <header> containing an <h1> and a <nav>", () => {
  const header = blocks(body, "header")[0];
  assert.ok(header !== undefined, "missing a <header>...</header>");
  assert.ok(blocks(header, "h1").some((h) => text(h)), "the <header> needs a non-empty <h1>");
  assert.match(header, /<nav\b/i, "the <header> needs a <nav>");
});

test("B1.3: the <nav> has at least 3 links", () => {
  const nav = blocks(body, "nav")[0];
  assert.ok(nav !== undefined, "missing a <nav>...</nav>");
  const n = tagsOf(nav, "a").filter((a) => (a.href || "").trim()).length;
  assert.ok(n >= 3, `the <nav> needs at least 3 links with an href, found ${n}`);
});

test("B1.4: exactly one <main>", () => {
  const n = (body.match(/<main\b/gi) || []).length;
  assert.equal(n, 1, `expected exactly one <main>, found ${n}`);
});

test("B1.5: at least two <section>s inside <main>, each starting with an <h2>", () => {
  const main = blocks(body, "main")[0] || "";
  const sections = blocks(main, "section");
  assert.ok(sections.length >= 2, `expected at least 2 <section>s inside <main>, found ${sections.length}`);
  sections.forEach((s, i) => {
    const first = s.match(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/i);
    assert.ok(first && first[1] === "2" && text(first[2]), `section ${i + 1} must start with a non-empty <h2>`);
  });
});

test("B1.6: the story is an <article> with an <h2> and <p> text", () => {
  const article = blocks(body, "article")[0];
  assert.ok(article !== undefined, "missing an <article>...</article> for the hackathon story");
  assert.ok(blocks(article, "h2").some((h) => text(h)), "the <article> needs a non-empty <h2>");
  assert.ok(blocks(article, "p").some((p) => text(p)), "the story's text must be inside <p> tags");
});

test("B1.7: a <footer>", () => {
  assert.ok(blocks(body, "footer").some((f) => text(f)), "missing a non-empty <footer>...</footer>");
});

// ---------- B2: the timetable ----------

function rows() {
  const table = blocks(body, "table")[0];
  assert.ok(table !== undefined, "missing a <table>...</table>");
  return blocks(table, "tr").map((r) => ({
    th: (r.match(/<th\b/gi) || []).length,
    td: (r.match(/<td\b/gi) || []).length,
  }));
}

test("B2.8: the first table row has at least 3 <th> cells", () => {
  const r = rows();
  assert.ok(r.length, "the table has no <tr> rows");
  assert.ok(r[0].th >= 3 && r[0].td === 0, `the first row needs at least 3 <th> cells and no <td> (found ${r[0].th} th, ${r[0].td} td)`);
});

test("B2.9: at least 3 rows of <td> data cells", () => {
  const n = rows().filter((r) => r.td > 0).length;
  assert.ok(n >= 3, `expected at least 3 rows of <td> cells, found ${n}`);
});

test("B2.10: every row has the same number of cells", () => {
  const counts = rows().map((r) => r.th + r.td);
  assert.ok(counts.every((c) => c === counts[0]), `rows have different numbers of cells: ${counts.join(", ")}`);
});

// ---------- B3: the form ----------

function form() {
  const f = blocks(body, "form")[0];
  assert.ok(f !== undefined, "missing a <form>...</form>");
  return f;
}

test("B3.11: the form has text, email, password, number and checkbox inputs, each with id and name", () => {
  const inputs = tagsOf(form(), "input");
  for (const type of ["text", "email", "password", "number", "checkbox"]) {
    const input = inputs.find((a) => (a.type || "text").toLowerCase() === type);
    assert.ok(input, `missing an <input type="${type}">`);
    assert.ok((input.id || "").trim(), `the <input type="${type}"> needs an id`);
    assert.ok((input.name || "").trim(), `the <input type="${type}"> needs a name`);
  }
});

test("B3.12: every input has a <label> whose for matches its id", () => {
  const f = form();
  const fors = new Set(tagsOf(f, "label").map((l) => (l.for || "").trim()));
  const inputs = tagsOf(f, "input").filter((a) => !["submit", "button", "hidden"].includes((a.type || "").toLowerCase()));
  assert.ok(inputs.length, "the form has no inputs");
  for (const a of inputs) {
    assert.ok(a.id && fors.has(a.id), `no <label for="${a.id || "?"}"> matches the <input type="${a.type || "text"}" id="${a.id || ""}">`);
  }
});

test("B3.13: a submit button", () => {
  const f = form();
  const ok = tagsOf(f, "button").some((b) => (b.type || "submit").toLowerCase() === "submit")
    || tagsOf(f, "input").some((a) => (a.type || "").toLowerCase() === "submit");
  assert.ok(ok, 'missing <button type="submit">Join</button> inside the form');
});

// ---------- Part C: accessibility ----------

test("C14: every <img> has an alt that describes the picture", () => {
  const imgs = tagsOf(body, "img");
  assert.ok(imgs.length, "keep the hackathon <img>");
  const lazy = ["", "image", "img", "photo", "picture", "pic"];
  imgs.forEach((a) => assert.ok(!lazy.includes((a.alt || "").trim().toLowerCase()),
    `<img src="${a.src}"> has alt="${a.alt ?? ""}" — describe what the picture shows`));
});

test("C15: no link says only 'click here', 'here', 'link' or 'read more'", () => {
  const bad = ["click here", "here", "link", "read more", "click"];
  for (const m of body.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
    const words = text(m[1]).toLowerCase().replace(/[.!]/g, "").trim();
    assert.ok(words && !bad.includes(words), `a link says "${text(m[1])}" — use words that make sense on their own`);
  }
});

test("C16: headings never skip a level", () => {
  const levels = [...body.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  assert.equal(levels[0], 1, "the first heading on the page must be an <h1>");
  for (let i = 1; i < levels.length; i++) {
    assert.ok(levels[i] <= levels[i - 1] + 1, `heading order jumps from <h${levels[i - 1]}> to <h${levels[i]}>`);
  }
});

// ---------- Part D: answers.md (completeness only; the instructor marks it) ----------

test("D: every question in answers.md has an answer of at least 15 words", () => {
  const answers = fs.readFileSync(path.join(__dirname, "..", "answers.md"), "utf8");
  for (const q of ["Q1", "Q2", "Q3"]) {
    const m = answers.match(new RegExp(`## ${q}\\.[^\\n]*\\n([\\s\\S]*?)(?=\\n## Q|$)`));
    assert.ok(m, `the heading for ${q} is missing from answers.md — don't delete question lines`);
    const words = m[1].replace(/Your answer:/i, "").split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 15, `${q}: write at least 2 full sentences (found ${words} words)`);
  }
});

// ---------- C17: author tag ----------

test("C17: <meta name=\"author\"> names your own GitHub username", () => {
  const meta = tagsOf(html, "meta").find((a) => (a.name || "").toLowerCase() === "author");
  assert.ok(meta, 'missing <meta name="author" content="your-github-username"> in <head>');
  const name = (meta.content || "").trim();
  assert.ok(name && name.toLowerCase() !== "your-github-username", "replace the placeholder with your real GitHub username");
  // PR_AUTHOR is the GitHub account that opened the Pull Request (set by Autograde).
  if (process.env.PR_AUTHOR) {
    assert.equal(name.toLowerCase(), process.env.PR_AUTHOR.toLowerCase(),
      `author tag says "${name}" but this Pull Request was opened by GitHub user "${process.env.PR_AUTHOR}"`);
  } else {
    console.log("  (running locally: the username match is checked automatically on your Pull Request)");
  }
});
