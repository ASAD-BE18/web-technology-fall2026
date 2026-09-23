# Week 2 Assignment — HTML Basics

**Weight:** 15 marks · **Tests:** `tests/test.js` (zero-dependency, uses Node's
built-in test runner)

## What to do

Edit `index.html` in this folder (do not rename it, do not move it) so that
it is a personal "About Me" page meeting every requirement below.

## Requirements

1. A valid HTML5 skeleton: `<!DOCTYPE html>`, `<html>`, `<head>` with a
   `<title>`, and `<body>`.
2. Exactly one `<h1>` heading containing your name.
3. At least one `<p>` paragraph of at least one sentence about yourself.
4. An unordered list (`<ul>`) with **at least 3** `<li>` items listing your
   interests.
5. At least one `<img>` tag with a non-empty `alt` attribute (the image
   itself does not need to exist/load — this course is about the HTML, not
   sourcing a real photo).
6. At least one link (`<a href="...">`) to any real or example URL.
7. In `<head>`, replace the placeholder in `<meta name="author" content="your-github-username">`
   with your own GitHub username. This confirms the submission is yours — see
   "Academic integrity" below.

## How to test your own work before submitting

From the repository root:

```bash
node --test assignments/week02-html-basics/tests/test.js
```

Every line should show `# pass`. If any show `# fail`, read the failure
message — it names exactly which requirement above wasn't met. (The author-tag
test only checks your username automatically in CI, since it reads it from
who actually pushed the branch — running locally it just checks the tag isn't
left as the placeholder.)

## Academic integrity

Two automated checks exist to make copying a classmate's work harder, not
just against the rules:

- **The author tag (requirement 7)** must match the GitHub username that
  submitted the Pull Request. Copying a classmate's `index.html` wholesale
  carries their username in it, so the test fails with your name on the PR.
- **A similarity check** (a separate, non-blocking item on your PR) compares
  your submission against everyone else's for this assignment and flags close
  matches for the instructor to review — it doesn't fail your build, but it
  is visible on the PR.

Writing your own HTML from the requirements above, even if it ends up
structurally similar to a classmate's, is not a problem — copying their file
and editing around it is what these checks are aimed at.

## Submission

Follow the standard workflow in `docs/submission-workflow.md`:
branch `week02-html-basics` → edit `index.html` → test locally → commit →
push → open a Pull Request.
