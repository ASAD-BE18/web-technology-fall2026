// Lab 4 tests — zero external dependencies (Node.js 18+).
// A small, forgiving CSS reader (not a full parser), in keeping with this
// course's "no extra tooling" approach.
// Run from the repository root with:
//   node --test assignments/lab04-flexbox/tests/test.js
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

// expect: { property: exactValue | [allowed values] | true (any non-empty value) }
function requireDecls(selector, expect) {
  const d = declsFor(selector);
  assert.ok(d, `missing a rule for the '${selector}' selector`);
  for (const [prop, want] of Object.entries(expect)) {
    const got = d.get(prop);
    assert.ok(got, `'${selector}' must set ${prop}`);
    if (typeof want === "string") assert.equal(got, want, `'${selector}' must set ${prop}: ${want} (found "${got}")`);
    if (Array.isArray(want)) assert.ok(want.includes(got), `'${selector}' ${prop} must be one of: ${want.join(", ")} (found "${got}")`);
  }
}

// ---------- Part B ----------

test("B1: .navbar is a flex row: space-between, centred, with padding", () => {
  requireDecls(".navbar", { display: "flex", "justify-content": "space-between", "align-items": "center", padding: true });
});

test("B2: .menu is flex with a gap", () => {
  requireDecls(".menu", { display: "flex", gap: true });
});

test("B3: .menu-link is inline-block with a width", () => {
  requireDecls(".menu-link", { display: "inline-block", width: true });
});

test("B4: .cards is flex with a gap and a taught justify-content value", () => {
  requireDecls(".cards", { display: "flex", gap: true, "justify-content": ["flex-start", "center", "flex-end", "space-between"] });
});

test("B5: .card sets width, padding and border", () => {
  requireDecls(".card", { width: true, padding: true, border: true });
});

test("B6: braces balance and every declaration is 'property: value;'", () => {
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

test("B7: the first line names your own GitHub username", () => {
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

test("C8: .link-list is a flex column with a gap", () => {
  requireDecls(".link-list", { display: "flex", "flex-direction": "column", gap: true });
});

test("C9: .hidden is removed with display: none", () => {
  requireDecls(".hidden", { display: "none" });
});

test("C10: .badge is nudged with position: relative, top and left", () => {
  requireDecls(".badge", { position: "relative", top: true, left: true });
});

test("index.html is unchanged (Lab 4 is done in style.css only)", () => {
  const page = read("index.html").replace(/\s+/g, " ").trim();
  const hash = crypto.createHash("sha256").update(page).digest("hex");
  assert.equal(hash, "bf5126b3117c85e32a030a1c4030e4eba56269962dd195e9ae48d5fc8c33950e",
    "index.html was edited — undo your changes to it (git checkout -- index.html) and lay out the page from style.css");
});

// ---------- Part D ----------

test("D: W1–W4 one-word answers are correct", () => {
  const answers = read("answers.md");
  const expected = { W1: "main", W2: "cross", W3: "vertical", W4: "inline" };
  for (const [key, want] of Object.entries(expected)) {
    // Greedy ".*:" takes the LAST colon on the line.
    const m = answers.match(new RegExp(`^- ${key}\\b.*:[ \\t]*(.*)$`, "m"));
    assert.ok(m, `the line for ${key} is missing from answers.md — don't delete lines`);
    const got = m[1].trim().replace(/[*_.`]/g, "").toLowerCase();
    assert.ok(got, `${key}: write one word after the colon`);
    assert.equal(got, want, `${key}: "${m[1].trim()}" is not right — re-read R08 and try again`);
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
