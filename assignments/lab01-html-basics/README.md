# Lab 1 — GitHub Setup and HTML Basics

| | |
|---|---|
| **Type** | Graded take-home lab — 10 marks, counts toward the **lab grade** (the 1 credit hour) |
| **Covers** | Lectures 1–3 · read Student Reader R01, R02, R03 first |
| **Released** | Week 5 |
| **Due** | 7 days after release — the exact date and time are in the announcement. Late = 0. |
| **Branch name** | `lab01-html-basics` |
| **Files you edit** | `index.html`, `hobby.html`, `answers.md` (all in this folder) |
| **Tests** | `tests/test.js` (Node's built-in test runner — nothing to install) |
| **You need** | A laptop or a university PC with Git, Node.js 22, VS Code (or any editor) and a browser |

This is a take-home lab. There is no lab session, so **nobody will walk you
through it**. Read every line of this sheet before you start. Do the parts in
order.

---

## Before you start (required)

1. Read **R03 — HTML Structure, Text, Links, Images, Lists** from the Student Reader.
2. Optional video: CS50 Web, Lecture 0 (HTML part) —
   https://cs50.harvard.edu/web/notes/0/
3. If you have **never** set up this repository, do the **One-time setup** in
   `docs/submission-workflow.md` now, then open your roster Pull Request
   (`roster/README.md` explains it). You cannot submit any lab without it.

---

## Part A — Follow along (not marked, but do it)

Open `index.html` in VS Code **and** in your browser. Type each item below,
save, and refresh the browser after every step. Watch what changes.

1. Add `<h1>Your Name</h1>` inside `<body>`. Refresh.
2. Add a `<p>` under it. Put one word inside `<strong>` and one inside `<em>`. Refresh. What changed?
3. Add an `<img>` with `src="me.jpg"` and an `alt`. The picture will be broken. That is fine. What does the browser show instead?
4. Change `<h1>` to `<h4>`. Refresh. Change it back. Headings are about **importance**, not size.

---

## Part B — Your profile page, `index.html` (tested)

Edit `index.html` so it meets **every** requirement:

1. A valid HTML5 skeleton: `<!DOCTYPE html>`, `<html>`, `<head>` with a
   non-empty `<title>`, and `<body>`.
2. **Exactly one** `<h1>`, containing your name.
3. **At least two** `<h2>` section headings (for example *About me* and *My goals*).
4. **At least two** non-empty `<p>` paragraphs.
5. At least one `<strong>` **or** `<em>` inside a paragraph.
6. An unordered list `<ul>` with **at least 3** `<li>` items (your interests).
7. An ordered list `<ol>` with **at least 3** `<li>` items (your top 3 goals for this semester, in order).
8. At least one `<img>` with a non-empty `alt` that **describes the picture**.
   `alt="image"`, `alt="photo"` and `alt="picture"` are rejected.
9. At least one link to an outside website, with a full URL: `<a href="https://...">`.
10. In `<head>`, replace the placeholder in
    `<meta name="author" content="your-github-username">` with **your own** GitHub username.

## Part C — A second page, `hobby.html` (tested)

11. Fill in `hobby.html` (it is already in this folder). It must have its own
    skeleton and `<title>`, exactly one `<h1>` naming one hobby, and at least
    one `<p>` about it.
12. `index.html` must link to `hobby.html` with a **relative** link:
    `<a href="hobby.html">…</a>`.
13. `hobby.html` must link back with `<a href="index.html">…</a>`.
14. `hobby.html` must have the same author `<meta>` tag with your username.

Click both links in the browser to prove they work before you submit.

## Part D — Explain it, `answers.md` (marked by the instructor)

Answer the three questions in `answers.md` **in your own words**, at least
2 full sentences each. The test only checks that you wrote something. The
instructor reads every answer. Copied or AI-written answers get 0, and you may
be asked to explain them in person (see *Marking* below).

---

## Test your work before you submit

From the repository root (the folder that contains `assignments/`):

```bash
node --test assignments/lab01-html-basics/tests/test.js
```

Every test must say `ok`. If one says `not ok`, read its message — it names
the requirement you missed. Fix it and run the tests again.

## Submission

Follow `docs/submission-workflow.md`: `git pull upstream main` → branch
`lab01-html-basics` → edit → test → commit → push → open a Pull Request into
the course repository's `main`. Both checks (**Autograde** and
**Submission guard**) must be green.

## Marking (10 marks)

| Part | What is checked | Marks |
|---|---|---|
| B + C | Automatic tests on your Pull Request | 6 |
| B + C | Instructor review: clean, indented, readable HTML that is your own work | 2 |
| D | `answers.md`: correct, clear, in your own words | 2 |

**Viva check.** Every week some students are picked at random to explain
their lab and change one thing live in front of the instructor (about
3 minutes). If you cannot explain your own code, **this lab gets 0**, even if
every test is green.

## Academic integrity

- The author tag must match the GitHub account that opened the Pull Request.
  A copied file still has the original username, so the test fails.
- After the deadline every submission is compared with every other one.
  Close matches are reviewed.
- Helping a classmate find a bug is fine. Sending them your file is not.
