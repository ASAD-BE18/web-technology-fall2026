// Week 2 Assignment tests — zero external dependencies, uses Node's
// built-in test runner and assertion library (Node.js 18+).
// Run with: node --test assignments/week02-html-basics/tests/
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const htmlPath = path.join(__dirname, "..", "index.html");
// Strip HTML comments before checking, so instructional TODO comments
// (which may contain example tag syntax like <a href="...">) can never
// accidentally satisfy a requirement.
const html = fs.readFileSync(htmlPath, "utf8").replace(/<!--[\s\S]*?-->/g, "");

test("has a valid HTML5 skeleton (doctype, html, head with title, body)", () => {
  assert.match(html, /<!DOCTYPE html>/i, "missing <!DOCTYPE html>");
  assert.match(html, /<html[\s>]/i, "missing <html> tag");
  assert.match(html, /<head[\s>][\s\S]*<\/head>/i, "missing a <head>...</head> section");
  assert.match(html, /<title>[\s\S]+<\/title>/i, "missing a non-empty <title>");
  assert.match(html, /<body[\s>][\s\S]*<\/body>/i, "missing a <body>...</body> section");
});

test("has exactly one <h1> heading with your name (non-empty)", () => {
  const matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  assert.equal(matches.length, 1, `expected exactly one <h1>, found ${matches.length}`);
  const inner = matches[0].replace(/<[^>]+>/g, "").trim();
  assert.ok(inner.length > 0, "your <h1> must contain your name, not be empty");
});

test("has at least one non-empty <p> paragraph", () => {
  const matches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  const nonEmpty = matches.filter((m) => m.replace(/<[^>]+>/g, "").trim().length > 0);
  assert.ok(nonEmpty.length >= 1, "expected at least one non-empty <p> paragraph");
});

test("has a <ul> with at least 3 <li> items", () => {
  const ulMatch = html.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
  assert.ok(ulMatch, "missing a <ul>...</ul> unordered list");
  const items = ulMatch[1].match(/<li[^>]*>[\s\S]*?<\/li>/gi) || [];
  assert.ok(items.length >= 3, `expected at least 3 <li> items inside <ul>, found ${items.length}`);
});

test("has at least one <img> tag with a non-empty alt attribute", () => {
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  assert.ok(imgTags.length >= 1, "expected at least one <img> tag");
  const withAlt = imgTags.filter((tag) => /alt\s*=\s*["'][^"']+["']/i.test(tag));
  assert.ok(withAlt.length >= 1, "at least one <img> must have a non-empty alt attribute");
});

test("has at least one link with a non-empty href", () => {
  const links = html.match(/<a\s[^>]*href\s*=\s*["'][^"']+["'][^>]*>/gi) || [];
  assert.ok(links.length >= 1, "expected at least one <a href=\"...\"> link");
});

test("head includes a submission author tag naming your own GitHub username", () => {
  const metaMatch =
    html.match(/<meta\s+name=["']author["']\s+content=["']([^"']+)["']\s*\/?>/i) ||
    html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']author["']\s*\/?>/i);
  assert.ok(metaMatch, 'missing <meta name="author" content="your-github-username"> in <head>');

  const content = metaMatch[1].trim();
  assert.ok(
    content.length > 0 && content.toLowerCase() !== "your-github-username",
    "the author meta tag's content must be your real GitHub username, not the placeholder"
  );

  // GITHUB_ACTOR is set automatically by GitHub Actions to whoever pushed
  // the branch this PR is built from — comparing it here is what catches a
  // wholesale copy of a classmate's file (they'd still show as its author).
  const actor = process.env.GITHUB_ACTOR;
  if (actor) {
    assert.equal(
      content.toLowerCase(),
      actor.toLowerCase(),
      `author meta tag says "${content}" but this PR was submitted by GitHub user "${actor}" ` +
        "— this usually means the file was copied from someone else's submission"
    );
  } else {
    console.log("  (skipping username match: GITHUB_ACTOR isn't set locally; CI checks it automatically)");
  }
});
