# Web Technology — Course Repository

This repository is where **Web Technology** homework happens. Every graded
assignment lives here, in its own folder under `assignments/`, and you submit
your work by opening a **Pull Request (PR)** — the same workflow real software
teams use every day.

You do not need your own computer for any of this. Everything below works from
a shared lab PC using only a free GitHub account, a text editor, and a browser
(plus Node.js and PHP for the weeks that need them — already installed on the
lab machines).

## What you'll actually learn here

Alongside HTML, CSS, JavaScript, and PHP, this repo teaches you real Git and
GitHub — the version-control and collaboration tools used by virtually every
professional software team and open-source project on Earth. By the end of
the semester you will have:

- Created and used a GitHub account
- Forked and cloned a repository
- Created branches, made commits, and written commit messages
- Pushed code and opened Pull Requests
- Watched automated tests (Continuous Integration) check your own code
- Responded to instructor feedback left directly on your code

These are genuinely valuable, portable skills — the same steps you'd follow
contributing to any real open-source project or joining any dev team.

## Before you start: read these two files

1. **`docs/git-and-github-basics.md`** — if you are brand new to Git/GitHub,
   start here. It explains every term and command you'll need in plain
   language. (This pairs with the "Git & GitHub Basics" lecture and lab in
   the main course package — see `06_Git_and_GitHub/` there.)
2. **`docs/submission-workflow.md`** — the exact, step-by-step commands you
   will run for every single assignment, from forking this repo to opening
   your Pull Request. Bookmark this page; you'll use it every week.

If anything goes wrong, check **`docs/faq-troubleshooting.md`** before asking
for help — it covers the mistakes almost everyone makes in their first few
weeks.

## How grading works here

Every assignment folder includes an automated test suite. The moment you open
a Pull Request, GitHub automatically runs those tests against your code and
shows a green check (✅ all tests passed) or a red cross (❌ something's
failing) directly on your PR — usually within a minute. This is exactly how
professional developers get instant feedback before a human ever reviews
their code.

**A green check does not by itself mean full marks** — your instructor still
reviews the PR for code quality, style, and anything the automated tests
can't measure — but it does mean your code does what was asked, and you'll
know that *before* your instructor even looks at it.

## Academic integrity

Every assignment's tests include a check tying your submission to your own
GitHub username, and every PR gets an automated (advisory, non-blocking)
similarity comparison against everyone else's submission for that
assignment. See the "Academic integrity" section in each assignment's own
`README.md` for exactly how it works.

## Repository layout

| Folder | What's in it |
|---|---|
| `assignments/weekNN-topic/` | One folder per graded assignment: a `README.md` with the spec, the starter file(s) you edit, and a `tests/` folder with the automated checks (read-only — don't edit these). **New assignments are added here throughout the semester, not all at once** — you'll only ever see the one currently assigned. |
| `docs/` | Git/GitHub reference material for students |
| `.github/workflows/` | The automated test ("CI") configuration — you don't need to touch this |
| `INSTRUCTOR_SETUP_GUIDE.md` | For the instructor only — how this repo is set up and run |

## A new assignment shows up — now what?

Nothing is announced in this README when a new assignment goes live — it
just appears in `assignments/` after you `git pull` at the start of the
relevant week's lab (see Step 1 of `docs/submission-workflow.md`). Don't go
looking for next week's assignment early; it isn't there yet.

## Quick start (see `docs/submission-workflow.md` for full detail)

```bash
# 1. Fork this repo on github.com (click "Fork", top right) — do this once.

# 2. Clone YOUR fork (not the original) to the lab PC:
git clone https://github.com/YOUR-USERNAME/web-technology-fall2026.git
cd web-technology-fall2026

# 3. For each assignment, create a new branch:
git checkout -b week02-html-basics

# 4. Edit the assignment file(s), then commit and push:
git add assignments/week02-html-basics/index.html
git commit -m "Complete Week 2 HTML basics assignment"
git push origin week02-html-basics

# 5. On github.com, open a Pull Request from your branch into the
#    original repo's main branch. Wait for the automated checks to run.
```

Welcome to the course — and to Git and GitHub.
