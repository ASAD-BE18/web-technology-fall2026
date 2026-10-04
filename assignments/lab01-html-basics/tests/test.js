// Lab 1 tests — zero external dependencies, uses Node's built-in test
// runner and assertion library (Node.js 18+).
// Run from the repository root with:
//   node --test assignments/lab01-html-basics/tests/test.js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

// Strip HTML comments before checking, so the TODO comments (which may
// contain example tag syntax) can never satisfy a requirement.
function read(file) {
  return fs.readFileSync(path.join(__dirname, "..", file), "utf8").replace(/<!--[\s\S]*?-->/g, "");
}
const html = read("index.html");
const hobby = read("hobby.html");

// The text inside every <tag>...</tag>, with inner tags removed.
function texts(source, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  return [...source.matchAll(re)].map((m) => m[1].replace(/<[^>]+>/g, "").trim());
}

// Every attribute of one tag, as { name: value }, whatever the quote style.
function attrsOf(tag) {
  const attrs = {};
  for (const m of tag.matchAll(/([a-zA-Z-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/g)) {
    attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4];
  }
  return attrs;
}
function hrefs(source) {
  return (source.match(/<a\b[^>]*>/gi) || []).map((t) => (attrsOf(t).href || "").trim());
}

function skeleton(source, file) {
  assert.match(source, /<!DOCTYPE html>/i, `${file}: missing <!DOCTYPE html>`);
  assert.match(source, /<html[\s>]/i, `${file}: missing <html> tag`);
  assert.match(source, /<head[\s>][\s\S]*<\/head>/i, `${file}: missing a <head>...</head> section`);
  assert.ok(texts(source, "title").some((t) => t.length > 0), `${file}: missing a non-empty <title>`);
  assert.match(source, /<body[\s>][\s\S]*<\/body>/i, `${file}: missing a <body>...</body> section`);
}

// ---------- Part B: index.html ----------

test("B1: index.html has a valid HTML5 skeleton", () => skeleton(html, "index.html"));

test("B2: exactly one non-empty <h1>", () => {
  const h1 = texts(html, "h1");
  assert.equal(h1.length, 1, `expected exactly one <h1>, found ${h1.length}`);
  assert.ok(h1[0].length > 0, "your <h1> must contain your name, not be empty");
});

test("B3: at least two non-empty <h2> headings", () => {
  const n = texts(html, "h2").filter(Boolean).length;
  assert.ok(n >= 2, `expected at least 2 <h2> headings, found ${n}`);
});

test("B4: at least two non-empty <p> paragraphs", () => {
  const n = texts(html, "p").filter(Boolean).length;
  assert.ok(n >= 2, `expected at least 2 non-empty <p> paragraphs, found ${n}`);
});

test("B5: <strong> or <em> used inside a paragraph", () => {
  const paras = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[1]);
  assert.ok(paras.some((p) => /<(strong|em)\b[^>]*>[\s\S]*?\S[\s\S]*?<\/\1>/i.test(p)),
    "put at least one word inside <strong> or <em>, inside a <p>");
});

test("B6: a <ul> with at least 3 <li> items", () => {
  const lists = [...html.matchAll(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi)];
  assert.ok(lists.length, "missing a <ul>...</ul> unordered list");
  assert.ok(lists.some((m) => texts(m[1], "li").filter(Boolean).length >= 3), "your <ul> needs at least 3 non-empty <li> items");
});

test("B7: an <ol> with at least 3 <li> items", () => {
  const lists = [...html.matchAll(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi)];
  assert.ok(lists.length, "missing an <ol>...</ol> ordered list");
  assert.ok(lists.some((m) => texts(m[1], "li").filter(Boolean).length >= 3), "your <ol> needs at least 3 non-empty <li> items");
});

test("B8: an <img> whose alt describes the picture", () => {
  const imgs = (html.match(/<img\b[^>]*>/gi) || []).map(attrsOf);
  assert.ok(imgs.length, "expected at least one <img> tag");
  const lazy = ["image", "img", "photo", "picture", "pic"];
  assert.ok(imgs.some((a) => (a.alt || "").trim() && !lazy.includes(a.alt.trim().toLowerCase())),
    'at least one <img> needs an alt that describes it (alt="image" or "photo" does not count)');
});

test("B9: a link to an outside website with a full URL", () => {
  assert.ok(hrefs(html).some((h) => /^https?:\/\/\S+\.\S+/i.test(h)),
    'expected a link like <a href="https://example.com">');
});

// ---------- Part C: hobby.html ----------

test("C11: hobby.html has a skeleton, one <h1> and a <p>", () => {
  skeleton(hobby, "hobby.html");
  const h1 = texts(hobby, "h1");
  assert.equal(h1.length, 1, `hobby.html: expected exactly one <h1>, found ${h1.length}`);
  assert.ok(h1[0].length > 0, "hobby.html: the <h1> must name your hobby");
  assert.ok(texts(hobby, "p").some(Boolean), "hobby.html: expected at least one non-empty <p>");
});

test("C12: index.html links to hobby.html with a relative link", () => {
  assert.ok(hrefs(html).some((h) => /^(\.\/)?hobby\.html$/i.test(h)), 'index.html needs <a href="hobby.html">');
});

test("C13: hobby.html links back to index.html", () => {
  assert.ok(hrefs(hobby).some((h) => /^(\.\/)?index\.html$/i.test(h)), 'hobby.html needs <a href="index.html">');
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

// ---------- Author tag (both pages) ----------

function metaAuthor(source) {
  const meta = (source.match(/<meta\b[^>]*>/gi) || []).map(attrsOf).find((a) => (a.name || "").toLowerCase() === "author");
  return meta ? (meta.content || "").trim() : null;
}

for (const [file, source] of [["index.html", html], ["hobby.html", hobby]]) {
  test(`${file} names your own GitHub username in <meta name="author">`, () => {
    const name = metaAuthor(source);
    assert.ok(name !== null, `${file}: missing <meta name="author" content="your-github-username"> in <head>`);
    assert.ok(name && name.toLowerCase() !== "your-github-username", `${file}: replace the placeholder with your real GitHub username`);
    // PR_AUTHOR is set by the Autograde workflow to the GitHub account that
    // opened this Pull Request. A copied file still carries its original
    // author's username, so it fails here.
    if (process.env.PR_AUTHOR) {
      assert.equal(name.toLowerCase(), process.env.PR_AUTHOR.toLowerCase(),
        `${file}: author tag says "${name}" but this Pull Request was opened by GitHub user "${process.env.PR_AUTHOR}"`);
    } else {
      console.log("  (running locally: the username match is checked automatically on your Pull Request)");
    }
  });
}
