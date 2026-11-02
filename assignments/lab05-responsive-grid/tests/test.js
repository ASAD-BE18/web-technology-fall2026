// Lab 5 tests — zero external dependencies (Node.js 18+).
// A small, forgiving CSS reader (not a full parser), in keeping with this
// course's "no extra tooling" approach. It understands normal rules and
// "@media (...) { rules }" blocks, which is all Lab 5 uses.
// Run from the repository root with:
//   node --test assignments/lab05-responsive-grid/tests/test.js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const read = (file) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");
const raw = read("style.css");
// Strip comments before checking, so the TODO comment can never satisfy a check.
const css = raw.replace(/\/\*[\s\S]*?\*\//g, "");

// Every "@media (...) { ... }" block: its condition, the CSS inside it, and
// where it starts in the file.
const mediaBlocks = [...css.matchAll(/@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}/g)].map((m) => ({
  condition: m[1].replace(/\s+/g, "").toLowerCase(),
  written: m[1].trim().replace(/\s+/g, " "),
  inner: m[2],
  start: m.index,
}));
// The same file with the @media blocks blanked out (same length, so positions stay right).
const topCss = css.replace(/@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}/g, (m) => " ".repeat(m.length));

// Every "selector { declarations }" block in some CSS, with its selectors split on commas.
function rules(source) {
  const out = [];
  for (const m of source.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    out.push({ selectors: m[1].split(",").map((s) => s.trim().replace(/\s+/g, " ")), body: m[2], end: m.index + m[0].length });
  }
  return out;
}

// property -> value for one exact selector, across every rule that lists it
// (later rules win, as in the browser). null if no rule lists the selector.
function declsFor(selector, source) {
  let found = false;
  const decls = new Map();
  for (const r of rules(source)) {
    if (!r.selectors.includes(selector)) continue;
    found = true;
    for (const d of r.body.split(";")) {
      const i = d.indexOf(":");
      if (i > 0) decls.set(d.slice(0, i).trim().toLowerCase(), d.slice(i + 1).trim().toLowerCase().replace(/\s+/g, " "));
    }
  }
  return found ? decls : null;
}

// expect: { property: exactValue | [allowed values] | true (any non-empty value) }
function requireDecls(selector, expect, source = topCss, where = "") {
  const d = declsFor(selector, source);
  assert.ok(d, `missing a rule for the '${selector}' selector${where}`);
  for (const [prop, want] of Object.entries(expect)) {
    const got = d.get(prop);
    assert.ok(got, `'${selector}'${where} must set ${prop}`);
    if (typeof want === "string") assert.equal(got, want, `'${selector}'${where} must set ${prop}: ${want} (found "${got}")`);
    if (Array.isArray(want)) assert.ok(want.includes(got), `'${selector}'${where} ${prop} must be one of: ${want.join(", ")} (found "${got}")`);
  }
}

// The CSS inside every "@media (max-width: 600px)" block, joined together.
const PHONE = "(max-width:600px)";
function phoneCss() {
  const blocks = mediaBlocks.filter((b) => b.condition === PHONE);
  assert.ok(blocks.length, "missing a media query written exactly as in R09: @media (max-width: 600px) { ... }");
  return blocks.map((b) => b.inner).join("\n");
}
const INSIDE = " inside @media (max-width: 600px)";

function authorName() {
  const m = raw.match(/\/\*\s*author:\s*([^\s*]+)\s*\*\//i);
  return m ? m[1] : null;
}

// ---------- Part B ----------

test("B1: .navbar is a flex row with space-between and padding", () => {
  requireDecls(".navbar", { display: "flex", "justify-content": "space-between", padding: true });
});

test("B2: .cards is a grid of three equal columns with a gap", () => {
  requireDecls(".cards", { display: "grid", "grid-template-columns": "1fr 1fr 1fr", gap: true });
});

test("B3: .card sets padding and border", () => {
  requireDecls(".card", { padding: true, border: true });
});

test("B4: there is a @media (max-width: 600px) block, below the .cards rule", () => {
  const blocks = mediaBlocks.filter((b) => b.condition === PHONE);
  const others = mediaBlocks.filter((b) => b.condition !== PHONE).map((b) => "@media " + b.written);
  assert.ok(blocks.length, "missing a media query written exactly as in R09: @media (max-width: 600px) { ... }" +
    (others.length ? ` (found ${others.join(", ")} — only max-width: 600px is used in this lab)` : ""));
  const cardsRules = rules(topCss).filter((r) => r.selectors.includes(".cards"));
  assert.ok(cardsRules.length, "write the normal .cards rule first (B2)");
  const lastCards = Math.max(...cardsRules.map((r) => r.end));
  const withCards = blocks.filter((b) => rules(b.inner).some((r) => r.selectors.includes(".cards")));
  for (const b of withCards) {
    assert.ok(b.start > lastCards,
      "the @media block must come AFTER (below) the normal .cards rule — otherwise the normal rule wins, even on a phone");
  }
});

test("B5: inside the media query, .cards becomes one column", () => {
  requireDecls(".cards", { "grid-template-columns": "1fr" }, phoneCss(), INSIDE);
});

test("B6: inside the media query, .navbar stacks with flex-direction: column", () => {
  requireDecls(".navbar", { "flex-direction": "column" }, phoneCss(), INSIDE);
});

test("B7: braces balance and every declaration is 'property: value;'", () => {
  const opens = (css.match(/\{/g) || []).length;
  const closes = (css.match(/\}/g) || []).length;
  assert.equal(opens, closes, `unbalanced braces: ${opens} '{' vs ${closes} '}'`);
  const all = [...rules(topCss), ...mediaBlocks.flatMap((b) => rules(b.inner))];
  assert.ok(all.some((r) => r.body.trim()), "no non-empty CSS rules found at all");
  for (const r of all) {
    const body = r.body.trim();
    if (!body) continue;
    assert.ok(body.endsWith(";"), `a declaration is missing its semicolon in: ${r.selectors.join(", ")} { ${body} }`);
    for (const decl of body.split(";").map((d) => d.trim()).filter(Boolean)) {
      assert.match(decl, /^[a-zA-Z-]+\s*:\s*\S.*$/, `malformed declaration (expected "property: value"): "${decl}"`);
    }
  }
});

test("B8: the first line names your own GitHub username", () => {
  const name = authorName();
  assert.ok(name, "keep the comment /* author: your-github-username */ at the top of style.css");
  assert.notEqual(name.toLowerCase(), "your-github-username", "replace the placeholder with your real GitHub username");
  // PR_AUTHOR is the GitHub account that opened the Pull Request (set by Autograde).
  if (process.env.PR_AUTHOR) {
    assert.equal(name.toLowerCase(), process.env.PR_AUTHOR.toLowerCase(),
      `author comment says "${name}" but this Pull Request was opened by GitHub user "${process.env.PR_AUTHOR}"`);
  } else {
    console.log("  (running locally: the username match is checked automatically on your Pull Request)");
  }
});

// ---------- Part C ----------

test("C9: index.html has the viewport tag inside <head>", () => {
  const page = read("index.html").replace(/<!--[\s\S]*?-->/g, "");
  const head = (page.match(/<head[\s>][\s\S]*?<\/head>/i) || [""])[0];
  const metas = (head.match(/<meta\b[^>]*>/gi) || []).filter((t) => /name\s*=\s*["']?viewport/i.test(t));
  assert.ok(metas.length, 'add <meta name="viewport" content="width=device-width, initial-scale=1"> inside <head> in index.html');
  const content = (metas[0].match(/content\s*=\s*["']([^"']*)["']/i) || ["", ""])[1].replace(/\s+/g, "").toLowerCase();
  assert.equal(content, "width=device-width,initial-scale=1",
    `the viewport tag's content must be exactly "width=device-width, initial-scale=1" (found "${content}")`);
});

test("C10: .gallery is a grid with a gap and the right number of columns for your username", () => {
  const name = authorName();
  assert.ok(name && name.toLowerCase() !== "your-github-username", "put your GitHub username in the author line first (B8) — this test uses it");
  const columns = name.length <= 8 ? 3 : 4;
  const want = Array(columns).fill("1fr").join(" ");
  const d = declsFor(".gallery", topCss);
  assert.ok(d, "missing a rule for the '.gallery' selector");
  assert.equal(d.get("display"), "grid", "'.gallery' must set display: grid");
  assert.ok(d.get("gap"), "'.gallery' must set gap");
  assert.equal(d.get("grid-template-columns"), want,
    `your username "${name}" has ${name.length} characters, so '.gallery' needs ${columns} equal columns: ` +
    `grid-template-columns: ${want}; (found "${d.get("grid-template-columns") || "nothing"}")`);
});

test("C11: inside the media query, .gallery becomes two equal columns", () => {
  requireDecls(".gallery", { "grid-template-columns": "1fr 1fr" }, phoneCss(), INSIDE);
});

test("index.html is unchanged, apart from the viewport tag", () => {
  // The viewport tag is taken out first, so adding it (Part C) does not count as an edit.
  const page = read("index.html").replace(/<meta\b[^>]*name\s*=\s*["']?viewport[^>]*>/gi, "").replace(/\s+/g, " ").trim();
  const hash = crypto.createHash("sha256").update(page).digest("hex");
  assert.equal(hash, "3111e99febabbc1da477242d6569d183899002e5dd7cd723fa2a2b10eeaf0893",
    "index.html was edited — undo your changes to it (git checkout -- index.html), then add only the viewport tag");
});

// ---------- Part D ----------

test("D: W1–W2 and N1–N3 are correct", () => {
  const answers = read("answers.md");
  const expected = { W1: "narrower", W2: "wide", N1: "1", N2: "3", N3: "240" };
  for (const [key, want] of Object.entries(expected)) {
    // Greedy ".*:" takes the LAST colon on the line: the question text itself contains one.
    const m = answers.match(new RegExp(`^- ${key}\\b.*:[ \\t]*(.*)$`, "m"));
    assert.ok(m, `the line for ${key} is missing from answers.md — don't delete lines`);
    const got = m[1].trim().replace(/[*_.`]/g, "").replace(/px$/i, "").trim().toLowerCase();
    assert.ok(got, `${key}: write your answer after the colon`);
    assert.equal(got, want, `${key}: "${m[1].trim()}" is not right — re-read R09 (the worked example helps) and try again`);
  }
});

test("D: Q1 and Q2 each have an answer of at least 15 words", () => {
  const answers = read("answers.md");
  for (const q of ["Q1", "Q2"]) {
    const m = answers.match(new RegExp(`## ${q}\\.[^\\n]*\\n([\\s\\S]*?)(?=\\n## Q|$)`));
    assert.ok(m, `the heading for ${q} is missing from answers.md — don't delete question lines`);
    const words = m[1].replace(/Your answer:/i, "").split(/\s+/).filter(Boolean).length;
    assert.ok(words >= 15, `${q}: write at least 2 full sentences (found ${words} words)`);
  }
});
