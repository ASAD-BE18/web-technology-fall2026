// Lab 3 tests — zero external dependencies (Node.js 18+).
// A small, forgiving CSS reader (not a full parser), in keeping with this
// course's "no extra tooling" approach.
// Run from the repository root with:
//   node --test assignments/lab03-css-selectors-box-model/tests/test.js
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

// Every "selector { declarations }" block, with its selectors split on commas.
function rules() {
  const out = [];
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    out.push({ selectors: m[1].split(",").map((s) => s.trim().replace(/\s+/g, " ")), body: m[2] });
  }
  return out;
}

// property -> value for one exact selector, across every rule that lists it
// (later rules win, as in the browser). null if no rule lists the selector.
function declsFor(selector) {
  let found = false;
  const decls = new Map();
  for (const r of rules()) {
    if (!r.selectors.includes(selector)) continue;
    found = true;
    for (const d of r.body.split(";")) {
      const i = d.indexOf(":");
      if (i > 0) decls.set(d.slice(0, i).trim().toLowerCase(), d.slice(i + 1).trim().toLowerCase());
    }
  }
  return found ? decls : null;
}

function requireProps(selector, props) {
  const d = declsFor(selector);
  assert.ok(d, `missing a rule for the '${selector}' selector`);
  for (const p of props) assert.ok(d.has(p) && d.get(p), `'${selector}' must set ${p}`);
  return d;
}

// ---------- Part B ----------

test("B1: * { box-sizing: border-box; }", () => {
  const d = requireProps("*", ["box-sizing"]);
  assert.equal(d.get("box-sizing"), "border-box", "'*' must set box-sizing: border-box");
});

test("B2: body sets font-family, color and background-color", () => {
  requireProps("body", ["font-family", "color", "background-color"]);
});

test("B3: h1 sets color and text-align: center", () => {
  const d = requireProps("h1", ["color", "text-align"]);
  assert.equal(d.get("text-align"), "center", "'h1' must set text-align: center");
});

test("B4: .tagline sets font-size and text-align: center", () => {
  const d = requireProps(".tagline", ["font-size", "text-align"]);
  assert.equal(d.get("text-align"), "center", "'.tagline' must set text-align: center");
});

test("B5: .card sets width, padding, border, margin and background-color", () => {
  requireProps(".card", ["width", "padding", "border", "margin", "background-color"]);
});

test("B6: .note sets a color", () => {
  requireProps(".note", ["color"]);
});

test("B7: colours are written all three ways: a name, a hex code and rgb()", () => {
  const values = rules().flatMap((r) => r.body.split(";"))
    .filter((d) => /^\s*(color|background-color|border)\s*:/i.test(d))
    .map((d) => d.slice(d.indexOf(":") + 1).trim().toLowerCase());
  assert.ok(values.some((v) => /#[0-9a-f]{3}([0-9a-f]{3})?\b/.test(v)), "use at least one hex colour, like #1a5276");
  assert.ok(values.some((v) => /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/.test(v)), "use at least one rgb(...) colour, like rgb(255, 99, 71)");
  const named = values.map((v) => v.replace(/#[0-9a-f]+|rgba?\([^)]*\)|\d+(\.\d+)?(px|em|rem|%)?|\b(solid|dashed|dotted|double|none)\b/g, "").trim());
  assert.ok(named.some((v) => /^[a-z]+$/.test(v)), "use at least one named colour, like tomato or navy");
});

test("B8: braces balance and every declaration is 'property: value;'", () => {
  const opens = (css.match(/\{/g) || []).length;
  const closes = (css.match(/\}/g) || []).length;
  assert.equal(opens, closes, `unbalanced braces: ${opens} '{' vs ${closes} '}'`);
  const all = rules();
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

test("B9: the first line names your own GitHub username", () => {
  const m = raw.match(/\/\*\s*author:\s*([^\s*]+)\s*\*\//i);
  assert.ok(m, "keep the comment /* author: your-github-username */ at the top of style.css");
  const name = m[1];
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

test("C10: #special sets a color different from .note", () => {
  const special = requireProps("#special", ["color"]);
  const note = declsFor(".note");
  assert.ok(note && note.get("color"), "give '.note' a color first (B6)");
  assert.notEqual(special.get("color"), note.get("color"), "'#special' must use a different colour from '.note'");
});

test("index.html is unchanged (Lab 3 is done in style.css only)", () => {
  const page = read("index.html").replace(/\s+/g, " ").trim();
  const hash = crypto.createHash("sha256").update(page).digest("hex");
  assert.equal(hash, "bc253144f587b8a4f987b623bef8e5a8e644a03bb00958dde9a5674f597a4376",
    "index.html was edited — undo your changes to it (git checkout -- index.html) and style the page from style.css");
});

// ---------- Part D ----------

test("D: N1–N3 box widths are correct", () => {
  const answers = read("answers.md");
  const expected = { N1: 350, N2: 300, N3: 250 };
  for (const [key, want] of Object.entries(expected)) {
    // Greedy ".*:" takes the LAST colon on the line: the question text itself contains one.
    const m = answers.match(new RegExp(`^- ${key}\\b.*:[ \\t]*(.*)$`, "m"));
    assert.ok(m, `the line for ${key} is missing from answers.md — don't delete lines`);
    const got = m[1].trim().replace(/px$/i, "").trim();
    assert.ok(got, `${key}: write a number after the colon`);
    assert.equal(Number(got), want, `${key}: ${got} is not right — check R07's worked example and try again`);
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
