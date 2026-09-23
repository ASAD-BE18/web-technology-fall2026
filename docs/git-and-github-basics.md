# Git & GitHub Basics — Student Reference

Print this page, or keep it open in a browser tab. It explains every term
you'll hear this semester in plain language, then gives you the handful of
commands you'll actually type, over and over, all semester.

## The big picture, in one paragraph

**Git** is a program that runs on your computer and keeps a complete history
of every change you've ever saved to a project — like an infinite "undo"
button, and a way to try things without fear of breaking your work. **GitHub**
is a website that stores a copy of that history online, so you can back your
work up, share it, and collaborate with other people (like your instructor).
Almost every professional software team in the world uses this exact
combination.

## Core vocabulary

| Term | Plain-language meaning |
|---|---|
| **Repository ("repo")** | A project folder that Git is keeping a history of. |
| **Commit** | A saved "snapshot" of your project at one point in time, with a short message describing what changed. |
| **Fork** | Your own personal copy of someone else's repository, under your own GitHub account. Forking the course repo gives you a copy you can freely edit without affecting anyone else's. |
| **Clone** | Downloading a copy of a repository (usually your fork) from GitHub onto the lab PC you're sitting at. |
| **Branch** | A separate, independent line of work inside a repo. You'll create a new branch for each assignment, so your assignments never get tangled together. |
| **Push** | Uploading your commits from the lab PC back up to your fork on GitHub. |
| **Pull** | Downloading commits from GitHub down to the lab PC (the opposite of push). |
| **Pull Request (PR)** | A formal request asking "please review my branch and consider it as a submission." This is how you turn in homework in this course. |
| **Merge** | Combining a branch's changes into another branch (usually `main`). Your instructor merges — or simply reviews and grades — your PR. |
| **CI (Continuous Integration)** | Automated checks (tests) that run the moment you open a PR, checking your code without a human needing to run it by hand. |

## The mental model: why a *fork*, then a *branch*?

- You **fork once**, at the start of the semester. This is your permanent
  personal copy of the course repository.
- You create a **new branch for every assignment** (e.g., `week02-html-basics`,
  `week04-css-box-model`). Each branch is its own independent workspace, so a
  mistake in one assignment can never break another, and you can have several
  assignments "in progress" at once without them interfering with each other.
- You **open a Pull Request from that branch** back into the original course
  repository. This is your submission.

## The commands you'll actually use, every single week

```bash
# See what's changed since your last commit
git status

# Stage a file you've changed, so it's ready to be committed
git add path/to/your/file

# Save a snapshot of your staged changes, with a clear message
git commit -m "A short sentence describing what you did"

# Upload your commits to YOUR fork on GitHub
git push origin your-branch-name

# Create a new branch and switch to it, in one step
git checkout -b new-branch-name

# Switch to a branch that already exists
git checkout branch-name

# Download the latest version of a repo you don't have locally yet
git clone https://github.com/YOUR-USERNAME/web-technology-fall2026.git
```

That's genuinely most of what you need. You will type `git status`, `git add`,
`git commit`, and `git push` far more than anything else — get comfortable
with that four-step rhythm first.

## A typical assignment, start to finish

1. Make sure you're on your `main` branch and it's up to date (see
   `submission-workflow.md` for the exact commands).
2. `git checkout -b weekNN-topic` — create your assignment branch.
3. Open the assignment's `README.md` inside `assignments/weekNN-topic/` and
   read the spec.
4. Edit the starter file(s) in that same folder using your text editor.
5. Test your own work locally (each assignment's `README.md` tells you the
   exact command — usually something like `node --test assignments/weekNN-topic/tests/test.js`
   or `php assignments/weekNN-topic/tests/test.php`).
6. `git add`, `git commit -m "..."`, `git push origin weekNN-topic`.
7. On github.com, open a Pull Request from your branch into the course
   repository's `main` branch.
8. Watch the automated checks run on your PR (a small yellow dot turns into a
   green check or a red cross within about a minute).
9. If something fails, go back to step 4, fix it, and repeat steps 5–6 — your
   existing Pull Request updates automatically, you do not need to open a new
   one.

## Common beginner mix-ups

- **"git add" does not save your work** — it only marks a file as ready to be
  included in your *next* commit. You still need `git commit`.
- **Committing does not upload anything** — a commit only exists on your own
  lab PC until you `git push`.
- **You cannot push straight to the original course repository** — you push to
  *your fork*, then open a Pull Request to propose those changes to the
  original repository. This is normal and is how all open-source
  contribution works.
- **A red ❌ on your PR is useful information, not a failure grade** — it's
  telling you exactly what to fix, before a human even looks at your code.
