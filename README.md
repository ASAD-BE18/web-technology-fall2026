# Web Technology — Course Repository

This repository is where **Web Technology** homework happens. Every graded
assignment lives here, in its own folder under `assignments/`, and you submit
your work by opening a **Pull Request (PR)** — the same workflow real software
teams use every day.

Labs in this course are **take-home**: there is no lab session. You need a
laptop or a university PC with a free GitHub account, a text editor, a
browser, Git (with Git Bash) and Node.js 22. Every lab folder has a
`README.md` that tells you exactly what to do.

## What you'll actually learn here

Alongside HTML, CSS, JavaScript and Node.js, this repo teaches you real Git and
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
   language. Set everything up before you start Lab 1.
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

A second check, **Submission guard**, makes sure your PR only changes files
you're allowed to change (your assignment's folder, never its `tests/`).

**A green check does not by itself mean full marks** — your instructor still
reviews the PR for code quality, style, and anything the automated tests
can't measure — but it does mean your code does what was asked, and you'll
know that *before* your instructor even looks at it.

What's graded here:

| Folder | Counts toward |
|---|---|
| **Labs** (`labNN-...` folders, take-home) | The lab grade — the course's 1 lab credit hour (10 marks each; see each lab's README) |
| **Assignment 1** (Week 6) and **Assignment 2** (Week 10) | Assignments (15 marks each) |
| **Final project** | Final Project (presented in Week 14) |

Your instructor grades each PR as it stands at the deadline. Anything pushed
after the deadline is marked as late.

## Academic integrity

Every submission has an author tag holding your GitHub username, and the
tests check it matches the account that opened the PR. After each deadline,
every submission is compared with every other one, and close matches are
reviewed by your instructor. See the "Academic integrity" section in each
assignment's `README.md`.

**This repository is public.** Never put your roll number, phone number or
email in any file or Pull Request here. Your instructor links your GitHub
username to your roll number privately.

## Repository layout

| Folder | What's in it |
|---|---|
| `assignments/labNN-topic/` | One folder per graded assignment: a `README.md` with the spec, the starter file(s) you edit, and a `tests/` folder with the automated checks (read-only — don't edit these). **New assignments are added here throughout the semester, not all at once** — you'll only ever see the one currently assigned. |
| `roster/` | Your Week 1 practice Pull Request: one file named after your GitHub username |
| `docs/` | Git/GitHub reference material for students |
| `.github/` | The automatic checks and the Pull Request template — don't change anything here |

## A new assignment shows up — now what?

Nothing is announced in this README when a new assignment goes live. It
appears in `assignments/` after you run `git pull upstream main` (Step 1 of
`docs/submission-workflow.md`). **`git pull origin main` won't get it**,
because `origin` is your own fork. Don't look for next week's assignment
early; it isn't there yet.

## Quick start (see `docs/submission-workflow.md` for full detail)

```bash
# 1. Fork this repo on github.com (click "Fork", top right) — do this once.

# 2. Clone YOUR fork (not the original) and connect it to the course repo:
git clone https://github.com/YOUR-USERNAME/web-technology-fall2026.git
cd web-technology-fall2026
git remote add upstream https://github.com/ASAD-BE18/web-technology-fall2026.git

# 3. Get the newest assignments (every time):
git checkout main
git pull upstream main
git push origin main

# 4. For each assignment, create a new branch named after its folder:
git checkout -b lab01-html-basics

# 5. Edit, test, then commit and push to YOUR fork:
node --test assignments/lab01-html-basics/tests/test.js
git add assignments/lab01-html-basics/
git commit -m "Complete Lab 1 HTML basics"
git push origin lab01-html-basics

# 6. On github.com, open a Pull Request from your branch into the
#    course repo's main branch. Wait for the two checks to run.

# 7. On a shared university PC: sign Git out when you finish (see submission-workflow.md).
```

Welcome to the course — and to Git and GitHub.
