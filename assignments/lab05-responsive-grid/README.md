# Lab 5 — Responsive Design and CSS Grid

| | |
|---|---|
| **Type** | Graded take-home lab — 10 marks, counts toward the **lab grade** (the 1 credit hour) |
| **Covers** | Lecture 9 · read Student Reader R09 first |
| **Released** | Week 7 |
| **Due** | 7 days after release — the exact date and time are in the announcement. Late = 0. |
| **Branch name** | `lab05-responsive-grid` |
| **Files you edit** | `style.css`, `answers.md`, and **one line** in `index.html` (Part C says which). Change nothing else in `index.html` — a test checks it. |
| **Tests** | `tests/test.js` (Node's built-in test runner — nothing to install) |

This is a take-home lab. Read every line of this sheet before you start.
Do the parts in order.

---

## Before you start (required)

1. Read **R09 — Responsive Design and Grid**.
2. Optional video: CS50 Web, Lecture 0 (the part on responsive design and
   media queries) — https://cs50.harvard.edu/web/notes/0/

**How to change the screen width.** Open `index.html` in Chrome or Edge.
Either drag the browser window narrower, or press **F12** and then
**Ctrl+Shift+M** (the device toolbar) and drag the width. You will use both.

---

## Part A — Follow along (not marked, but do it)

Open `index.html` in the browser. Everything is stacked in one column.

1. In `style.css` type `.cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }`.
   Refresh. The three cards sit in three equal columns.
2. Change `1fr 1fr 1fr` to `2fr 1fr 1fr`. Refresh. Which card got wider? By how
   much? Change it back.
3. Below that rule, type:
   ```css
   @media (max-width: 600px) {
       .cards { grid-template-columns: 1fr; }
   }
   ```
   Refresh. Drag the window narrower. At about 600px the cards stack into
   one column. Drag it wider again. They go back to three.
4. Now press **F12**, then **Ctrl+Shift+M**. At the top, pick a phone (for
   example *iPhone SE*). The text is tiny and the cards do **not** stack.
   Remember this. You fix it in Part C.
5. Delete what you typed if you like, then do Part B properly.

---

## Part B — One page, two layouts, in `style.css` (tested)

1. `.navbar` sets `display: flex`, `justify-content: space-between` and a
   `padding`. The shop name goes left, the menu right.
2. `.cards` sets `display: grid`, `grid-template-columns: 1fr 1fr 1fr` and a
   `gap`.
3. `.card` sets a `padding` and a `border`.
4. Add a media query written exactly like this:
   `@media (max-width: 600px) { ... }`. Put it **below** your `.cards` rule.
   (Rules lower in the file win. You explain why in Part D.)
5. Inside the media query, `.cards` sets `grid-template-columns: 1fr`. On a
   narrow screen the cards stack.
6. Inside the same media query, `.navbar` sets `flex-direction: column`. On a
   narrow screen the shop name sits above the menu.
7. Every declaration is written `property: value;` and ends with a semicolon,
   and every `{` has a matching `}`. (A media query has a rule inside it, so it
   needs **two** `}` at the end.)
8. Keep the first line `/* author: your-github-username */`, with the
   placeholder replaced by **your own** GitHub username.

Check it: drag the window narrow and wide. Three columns when wide, one
column when narrow.

## Part C — Fix the phone, then add the shelves (tested)

9. **Fix.** Part A step 4 showed the problem: in phone mode the page shrinks
   and the media query never runs. Add this line inside `<head>` in
   `index.html`. It is the **only** change you may make to that file:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```
   Refresh phone mode. The text is readable and the cards stack.
10. **Your own column count.** Count the characters in **your GitHub
    username** (the one on line 1 of `style.css`).
    - 8 characters or fewer: `.gallery` gets **3** equal columns:
      `grid-template-columns: 1fr 1fr 1fr;`
    - 9 characters or more: `.gallery` gets **4** equal columns:
      `grid-template-columns: 1fr 1fr 1fr 1fr;`

    `.gallery` also sets `display: grid` and a `gap`. Example: the username
    `sara-dev` has 8 characters, so it gets 3 columns.
11. Inside your media query, `.gallery` sets `grid-template-columns: 1fr 1fr`.
    On a phone the shelves show two per row.

You may add more rules to make the page look nice (colours, a `.tile`
padding). Extra rules are fine.

## Part D — `answers.md` (W1–W2 and N1–N3 tested; Q1–Q2 marked by the instructor)

- **W1–W2:** one word each, from the choices given. Checked automatically.
- **N1–N3:** one number each, no "px". Checked automatically. For N3, use the
  worked example in R09 section "How wide is each column?".
- **Q1–Q2:** at least 2 full sentences each, in your own words. Copied or
  AI-written answers get 0.

---

## Test your work before you submit

```bash
node --test assignments/lab05-responsive-grid/tests/test.js
```

Every test must say `ok`. Also look at the page in the browser: wide window
= three cards in a row; narrow window **and** phone mode = one card per row,
shelves two per row.

## Submission

Follow `docs/submission-workflow.md`: `git pull upstream main` → branch
`lab05-responsive-grid` → edit → test → commit → push → open a Pull Request.
Both checks must be green.

## Marking (10 marks)

| Part | What is checked | Marks |
|---|---|---|
| B + C + W1–W2 + N1–N3 | Automatic tests on your Pull Request | 6 |
| B + C | Instructor review: clean, readable CSS that is your own work | 2 |
| Q1–Q2 | Correct, clear, in your own words | 2 |

**Viva check.** Students are picked at random each week to explain their lab
and change one thing live (about 3 minutes). If you cannot explain your own
code, **this lab gets 0**, even if every test is green.

## Academic integrity

The author comment must match the GitHub account that opened the Pull
Request, and your gallery's column count depends on that username. After the
deadline every submission is compared with every other one. Helping a
classmate find a bug is fine. Sending them your file is not.
