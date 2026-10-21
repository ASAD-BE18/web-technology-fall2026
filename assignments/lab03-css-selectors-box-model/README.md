# Lab 3 — CSS Selectors, Box Model, Colours and Fonts

| | |
|---|---|
| **Type** | Graded take-home lab — 10 marks, counts toward the **lab grade** (the 1 credit hour) |
| **Covers** | Lectures 6–7 · read Student Reader R06 and R07 first |
| **Released** | Week 6 |
| **Due** | 7 days after release — the exact date and time are in the announcement. Late = 0. |
| **Branch name** | `lab03-css-selectors-box-model` |
| **Files you edit** | `style.css`, `answers.md` — **do not edit `index.html`** (a test checks it) |
| **Tests** | `tests/test.js` (Node's built-in test runner — nothing to install) |

This is a take-home lab. Read every line of this sheet before you start.
Do the parts in order.

---

## Before you start (required)

1. Read **R06 — CSS Intro and Selectors** and **R07 — Box Model, Colours, Fonts**.
2. Optional video: CS50 Web, Lecture 0 (CSS part) —
   https://cs50.harvard.edu/web/notes/0/

---

## Part A — Follow along (not marked, but do it)

Open `index.html` in the browser. It is plain black text. Then, in `style.css`:

1. Type `h1 { color: tomato; }`. Save, refresh. Change `tomato` to `#ff6347`, then to `rgb(255, 99, 71)`. Same colour, three ways.
2. Type `.card { border: 2px solid black; }`. Refresh. Add `padding: 20px;`. The space appears **inside** the border. Add `margin: 20px;`. The space appears **outside**.
3. Right-click a card → **Inspect**. In DevTools, find the box-model diagram. Hover over padding, border and margin.
4. Delete what you typed in steps 1–2 if you like, then do Part B properly.

---

## Part B — Style the page, in `style.css` only (tested)

1. A rule for `*` that sets `box-sizing: border-box`.
2. `body` sets `font-family`, `color` and `background-color`.
3. `h1` sets `color` and `text-align: center`.
4. `.tagline` sets `font-size` and `text-align: center`.
5. `.card` sets **all five**: `width`, `padding`, `border`, `margin` and `background-color`.
   Use these exact shorthand names, for example `padding: 16px;` (not `padding-top`).
   Use `background-color`, not the `background` shorthand.
6. `.note` sets a `color`.
7. Across your whole file, use colours written **all three ways**: at least one
   **name** (like `tomato`), one **hex** code (like `#1a5276`) and one `rgb(...)`.
8. Every declaration is written `property: value;` and ends with a semicolon,
   and every `{` has a matching `}`.
9. Keep the first line `/* author: your-github-username */`, with the
   placeholder replaced by **your own** GitHub username.

## Part C — Specificity (tested)

10. Add a rule for the **ID** selector `#special` that sets a `color` **different**
    from the colour you gave `.note`.
11. Refresh the page. The second paragraph has both the class and the ID.
    Which colour wins? You will explain why in Part D.

## Part D — `answers.md` (N1–N3 tested; Q1–Q2 marked by the instructor)

- **N1–N3:** work out three box widths. Write one number per line. These are
  checked automatically, so be exact.
- **Q1–Q2:** at least 2 full sentences each, in your own words. Copied or
  AI-written answers get 0.

---

## Test your work before you submit

```bash
node --test assignments/lab03-css-selectors-box-model/tests/test.js
```

Every test must say `ok`. Also look at the page in the browser: the cards must
show their border, padding, margin and background.

## Submission

Follow `docs/submission-workflow.md`: `git pull upstream main` → branch
`lab03-css-selectors-box-model` → edit → test → commit → push → open a Pull
Request. Both checks must be green.

## Marking (10 marks)

| Part | What is checked | Marks |
|---|---|---|
| B + C + N1–N3 | Automatic tests on your Pull Request | 6 |
| B + C | Instructor review: clean, readable CSS that is your own work | 2 |
| Q1–Q2 | Correct, clear, in your own words | 2 |

**Viva check.** Students are picked at random each week to explain their lab
and change one thing live (about 3 minutes). If you cannot explain your own
code, **this lab gets 0**, even if every test is green.

## Academic integrity

The author comment must match the GitHub account that opened the Pull
Request. After the deadline every submission is compared with every other
one. Helping a classmate find a bug is fine. Sending them your file is not.
