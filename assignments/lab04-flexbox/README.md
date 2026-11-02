# Lab 4 — Display, Position and Flexbox

| | |
|---|---|
| **Type** | Graded take-home lab — 10 marks, counts toward the **lab grade** (the 1 credit hour) |
| **Covers** | Lecture 8 · read Student Reader R08 first |
| **Released** | Week 6 |
| **Due** | 7 days after release — the exact date and time are in the announcement. Late = 0. |
| **Branch name** | `lab04-flexbox` |
| **Files you edit** | `style.css`, `answers.md` — **do not edit `index.html`** (a test checks it) |
| **Tests** | `tests/test.js` (Node's built-in test runner — nothing to install) |

This is a take-home lab. Read every line of this sheet before you start.
Do the parts in order.

---

## Before you start (required)

1. Read **R08 — Display, Position and Flexbox**.
2. Optional practice game (15 minutes, highly recommended): **Flexbox Froggy**,
   https://flexboxfroggy.com/ — finish at least level 10.

---

## Part A — Follow along (not marked, but do it)

Open `index.html` in the browser. Everything is stacked in one column.

1. In `style.css` type `.cards { display: flex; }`. Refresh. The three cards
   jump into a row. `display: flex` went on the **parent**, and the
   **children** moved.
2. Add `justify-content: center;`, then try `space-between` and `flex-end`.
   Refresh after each. Which axis is moving?
3. Type `.menu-link { width: 120px; }`. Refresh. Nothing changes. Now add
   `display: inline-block;`. Refresh. Why does it work now?
4. Delete what you typed if you like, then do Part B properly.

---

## Part B — Lay out the page, in `style.css` only (tested)

1. `.navbar` sets `display: flex`, `justify-content: space-between`,
   `align-items: center` and a `padding`. The logo goes left, the menu right.
2. `.menu` sets `display: flex` and a `gap`.
3. `.menu-link` sets `display: inline-block` and a `width`.
4. `.cards` sets `display: flex`, a `gap`, and `justify-content` set to one of
   `flex-start`, `center`, `flex-end` or `space-between`.
5. `.card` sets `width`, `padding` and `border`.
6. Every declaration is written `property: value;` and ends with a semicolon,
   and every `{` has a matching `}`.
7. Keep the first line `/* author: your-github-username */`, with the
   placeholder replaced by **your own** GitHub username.

## Part C — Column, hide and nudge (tested)

8. `.link-list` sets `display: flex`, `flex-direction: column` and a `gap`.
   The quick links stack top to bottom with space between them.
9. `.hidden` sets `display: none`. The old notice disappears from the page.
10. `.badge` sets `position: relative` plus a `top` and a `left`. Each badge
    moves a little away from its normal spot.

## Part D — `answers.md` (W1–W4 tested; Q1–Q2 marked by the instructor)

- **W1–W4:** one word each, from the choices given. Checked automatically.
- **Q1–Q2:** at least 2 full sentences each, in your own words. Copied or
  AI-written answers get 0.

---

## Test your work before you submit

```bash
node --test assignments/lab04-flexbox/tests/test.js
```

Every test must say `ok`. Also look at the page in the browser: navbar in one
line, cards in a row, quick links in a column, no old notice.

## Submission

Follow `docs/submission-workflow.md`: `git pull upstream main` → branch
`lab04-flexbox` → edit → test → commit → push → open a Pull Request. Both
checks must be green.

## Marking (10 marks)

| Part | What is checked | Marks |
|---|---|---|
| B + C + W1–W4 | Automatic tests on your Pull Request | 6 |
| B + C | Instructor review: clean, readable CSS that is your own work | 2 |
| Q1–Q2 | Correct, clear, in your own words | 2 |

**Viva check.** Students are picked at random each week to explain their lab
and change one thing live (about 3 minutes). If you cannot explain your own
code, **this lab gets 0**, even if every test is green.

## Academic integrity

The author comment must match the GitHub account that opened the Pull
Request. After the deadline every submission is compared with every other
one. Helping a classmate find a bug is fine. Sending them your file is not.
