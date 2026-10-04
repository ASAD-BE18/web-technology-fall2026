# Lab 2 — Tables, Forms and Semantic HTML

| | |
|---|---|
| **Type** | Graded take-home lab — 10 marks, counts toward the **lab grade** (the 1 credit hour) |
| **Covers** | Lectures 4–5 · read Student Reader R04 and R05 first |
| **Released** | Week 5 |
| **Due** | 7 days after release — the exact date and time are in the announcement. Late = 0. |
| **Branch name** | `lab02-tables-forms-semantic` |
| **Files you edit** | `index.html`, `answers.md` |
| **Tests** | `tests/test.js` (Node's built-in test runner — nothing to install) |

This is a take-home lab. Read every line of this sheet before you start.
Do the parts in order.

---

## Before you start (required)

1. Read **R04 — Tables and Forms** and **R05 — Semantic HTML5 and Accessibility**.
2. Optional video: CS50 Web, Lecture 0 (tables and forms) —
   https://cs50.harvard.edu/web/notes/0/

---

## Part A — Follow along (not marked, but do it)

Open `index.html` in your browser, then in VS Code.

1. The page is built only from `<div>`s. It looks fine. Now ask: which part is
   the menu? Which part is the main content? The browser cannot tell. That is
   the problem semantic tags solve.
2. Press **Tab** several times in the browser. Watch the focus jump from link
   to link. Some visitors use only the keyboard.
3. In VS Code, write a tiny form with one `<label for="x">` and one
   `<input id="x">`. Click the label words in the browser. The cursor jumps
   into the box. Now change the `id` to `y` and try again. Nothing happens.

---

## Part B — Rebuild and extend `index.html` (tested)

### B1. Semantic structure
1. **No `<div>` may remain** anywhere in the page. Replace every one with the right tag.
2. A `<header>` that contains an `<h1>` (the society name) and a `<nav>`.
3. The `<nav>` contains **at least 3** links.
4. **Exactly one** `<main>`.
5. Inside `<main>`: **at least two** `<section>`s (the timetable and the join form), each starting with an `<h2>`.
6. The hackathon story is an `<article>` with its own `<h2>`. Its text goes in `<p>`.
7. A `<footer>` at the bottom.

### B2. The timetable (inside the timetable section)
8. A `<table>` whose **first row** has **at least 3** `<th>` header cells (for example *Day*, *Time*, *Activity*).
9. **At least 3** more rows of `<td>` data cells.
10. **Every row has the same number of cells.**

### B3. The registration form (inside the join section)
11. A `<form>` containing these inputs, each with an `id` and a `name`:
    - `type="text"` — full name
    - `type="email"` — email
    - `type="password"` — password
    - `type="number"` — semester
    - `type="checkbox"` — "I agree to the society rules"
12. **Every input has a `<label>` whose `for` matches that input's `id` exactly.**
13. A submit button: `<button type="submit">Join</button>`.

## Part C — Fix the accessibility mistakes (tested)

The starter page has deliberate mistakes. Find and fix them:

14. Every `<img>` needs an `alt` that **describes the picture**. `alt="image"` is rejected.
15. No link may say only *click here*, *here*, *link* or *read more*. Link words must make sense on their own.
16. Headings must not skip a level: `<h1>` then `<h2>` then `<h3>`. Never `<h2>` straight to `<h4>`.
17. Replace the author placeholder in `<meta name="author">` with **your own** GitHub username.

## Part D — Explain it, `answers.md` (marked by the instructor)

Answer the three questions **in your own words**, at least 2 full sentences
each. Copied or AI-written answers get 0.

---

## Test your work before you submit

```bash
node --test assignments/lab02-tables-forms-semantic/tests/test.js
```

Every test must say `ok`. Also open the page in the browser and click every
label: the cursor must jump into its box.

## Submission

Follow `docs/submission-workflow.md`: `git pull upstream main` → branch
`lab02-tables-forms-semantic` → edit → test → commit → push → open a Pull
Request. Both checks must be green.

## Marking (10 marks)

| Part | What is checked | Marks |
|---|---|---|
| B + C | Automatic tests on your Pull Request | 6 |
| B + C | Instructor review: clean, indented, readable HTML that is your own work | 2 |
| D | `answers.md`: correct, clear, in your own words | 2 |

**Viva check.** Students are picked at random each week to explain their lab
and change one thing live (about 3 minutes). If you cannot explain your own
code, **this lab gets 0**, even if every test is green.

## Academic integrity

The author tag must match the GitHub account that opened the Pull Request.
After the deadline every submission is compared with every other one. Helping
a classmate find a bug is fine. Sending them your file is not.
