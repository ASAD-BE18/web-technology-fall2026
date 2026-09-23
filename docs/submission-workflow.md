# Submission Workflow — Exact Steps for Every Assignment

Follow this page precisely, in order, every week. Once you've done it twice
it becomes automatic.

## One-time setup (do this only once, in Week 1's lab)

1. **Create a free GitHub account** at github.com, if you don't already have
   one. Use an email address you'll still have access to after this course
   ends.
2. **Go to the course repository** at the URL your instructor gives you
   (e.g., `https://github.com/YOUR-INSTRUCTOR/web-technology-fall2026`).
3. **Click "Fork"** (top-right of the page). This creates your own personal
   copy at `https://github.com/YOUR-USERNAME/web-technology-fall2026`.
4. **Clone your fork** onto the lab PC (open a terminal in your course
   folder and run, replacing `YOUR-USERNAME`):
   ```bash
   git clone https://github.com/YOUR-USERNAME/web-technology-fall2026.git
   cd web-technology-fall2026
   ```
5. **Tell Git who you are** (only needed once per lab PC — some shared labs
   reset this, so you may need to repeat it each session):
   ```bash
   git config --global user.name "Your Full Name"
   git config --global user.email "you@example.com"
   ```

## Every assignment, from here on

### Step 1 — Make sure your fork is up to date

Assignments are added to the original repository throughout the semester, so
before starting new work, pull in anything new:

```bash
git checkout main
git pull origin main
```

*(If `git pull origin main` gives an error about "no such remote," first run:
`git remote add upstream https://github.com/YOUR-INSTRUCTOR/web-technology-fall2026.git`,
then use `git pull upstream main` instead — ask your instructor which applies
to your setup.)*

### Step 2 — Create a branch for this assignment

Use the exact folder name from `assignments/` as your branch name:

```bash
git checkout -b week02-html-basics
```

### Step 3 — Read the assignment spec

Open `assignments/week02-html-basics/README.md` and read it fully before
touching any code.

### Step 4 — Do the assignment

Edit the starter file(s) inside `assignments/week02-html-basics/` using your
text editor. **Do not rename files, and do not edit anything inside that
assignment's `tests/` folder** — the automated grading depends on the file
names and locations staying exactly as given.

### Step 5 — Test your own work before submitting

Each assignment's `README.md` gives you the exact command. Typically:

```bash
# For HTML/CSS/JavaScript assignments (always pass the exact test file path):
node --test assignments/week02-html-basics/tests/test.js

# For PHP assignments:
php assignments/week11-php-basics/tests/test.php
```

Fix anything that fails, and re-run the test command until it's clean — this
is exactly what the automated check will run on your Pull Request, so there
should be no surprises.

### Step 6 — Commit and push

```bash
git add assignments/week02-html-basics/
git commit -m "Complete Week 2 HTML basics assignment"
git push origin week02-html-basics
```

*(The very first time you push a new branch, GitHub may print a suggested
`git push --set-upstream origin week02-html-basics` command — that's fine,
either form works.)*

### Step 7 — Open a Pull Request

1. Go to your fork on github.com — you should see a banner offering to
   "Compare & pull request" for the branch you just pushed. Click it.
2. Make sure the PR is comparing your branch **into the original course
   repository's `main` branch** (not your own fork's `main`) — double-check
   the base repository shown at the top of the page.
3. Fill in the Pull Request template (your name, roll number, and the
   checklist) — it appears automatically.
4. Click **"Create pull request."**

### Step 8 — Watch the automated checks

Within about a minute, you'll see a check appear near the bottom of your PR
page — a yellow dot (running), then either:
- ✅ **green** — your code passed every automated test.
- ❌ **red** — click **"Details"** next to the check to see exactly which
  test failed and why.

### Step 9 — Fix and resubmit, if needed

If a check failed, go back to Step 4, fix the code on the **same branch**,
then repeat Step 6 (`git add`, `git commit`, `git push`). Your existing Pull
Request updates automatically — **do not open a second Pull Request for the
same assignment.**

### Step 10 — Wait for instructor review

A green check means your code works — it does not by itself mean full marks.
Your instructor will still review your Pull Request for code quality and
anything the automated tests can't measure, and will leave comments directly
on your code if needed.

## Submitting your next assignment

Go back to **Step 1** — always start the next assignment from an up-to-date
`main` branch, not from your previous assignment's branch.
