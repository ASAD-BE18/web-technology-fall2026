# Lab Task 1 (Week 2) — HTML Basics

| | |
|---|---|
| **Type** | Graded lab task — marked with the Lab Task Rubric (10 marks), part of *Lab performance & lab tasks* (15%) |
| **Released** | Week 2 lab |
| **Due** | Before your Week 3 lab starts |
| **Branch name** | `week02-html-basics` |
| **Files you edit** | `index.html` only |
| **Tests** | `tests/test.js` (uses Node's built-in test runner — nothing to install) |

## What to do

Edit `index.html` in this folder (do not rename it, do not move it) so that
it is a personal "About Me" page meeting every requirement below. This is the
same page you built in the Week 2 lab.

## Requirements

1. A valid HTML5 skeleton: `<!DOCTYPE html>`, `<html>`, `<head>` with a
   `<title>`, and `<body>`.
2. Exactly one `<h1>` heading containing your name.
3. At least one `<p>` paragraph of at least one sentence about yourself.
4. An unordered list (`<ul>`) with **at least 3** `<li>` items listing your
   interests.
5. At least one `<img>` tag with a non-empty `alt` attribute (the image
   itself does not need to exist/load — this task is about the HTML, not
   sourcing a real photo).
6. At least one link (`<a href="...">`) to any real or example URL.
7. In `<head>`, replace the placeholder in `<meta name="author" content="your-github-username">`
   with your own GitHub username. See "Academic integrity" below.

## How to test your own work before submitting

From the repository root:

```bash
node --test assignments/week02-html-basics/tests/test.js
```

Every line should show `# pass`. If any show `# fail`, read the failure
message — it names exactly which requirement above wasn't met. (On your lab
PC the author-tag test only checks that you replaced the placeholder. On your
Pull Request it also checks that the username matches the account that
opened the PR.)

## What you'll see on your Pull Request

Two automatic checks:

- **Autograde** — runs the same tests as above.
- **Submission guard** — checks that you only changed files in this folder
  and did not touch `tests/`.

Both should be green. A green result does not by itself mean full marks —
your instructor still reviews your code.

## Academic integrity

- **The author tag (requirement 7)** must match the GitHub account that
  opened the Pull Request. If you copy a classmate's file, it still has their
  username in it, so the test fails.
- **After the deadline, every submission is compared with every other one**
  for this task. Close matches are reviewed by your instructor.

Writing your own HTML from the requirements is fine, even if it ends up
looking similar to a classmate's. Copying their file and editing it is not.

## Submission

Follow `docs/submission-workflow.md`: update `main` from `upstream` → branch
`week02-html-basics` → edit `index.html` → test → commit → push → open a
Pull Request.
