# FAQ & Troubleshooting

Check here before asking for help — these are, in order, the mistakes almost
every student runs into during their first few weeks.

### "git commit" says I need to configure my name and email
Run these two commands once (repeat if a shared lab PC resets its settings):
```bash
git config --global user.name "Your Full Name"
git config --global user.email "you@example.com"
```

### I get "Permission denied" or "403" when I try to push
You are almost certainly trying to push to the **original course
repository** instead of **your own fork**. Check the remote URL:
```bash
git remote -v
```
The `origin` URL should contain **your own GitHub username**, not your
instructor's. If it doesn't, you cloned the wrong repository — go back and
clone your fork instead (see `submission-workflow.md`, one-time setup).

### My Pull Request is comparing into the wrong repository/branch
On the "Open a pull request" page, check the two dropdowns at the top: the
**base** (left side) should be the original course repo's `main` branch, and
the **compare** (right side) should be your fork's assignment branch. GitHub
sometimes guesses wrong — just change the dropdowns.

### The automated check is stuck on a yellow dot for a long time
Give it a minute or two — shared lab-hours traffic can queue checks. If it's
been stuck for more than 10 minutes, ask your instructor; it's likely a
one-off infrastructure delay, not something wrong with your code.

### The check failed but my code looks right to me
Click **"Details"** next to the failed check on your PR — it shows the exact
test output, including which specific check failed and, often, what value it
expected versus what your code produced. Read this output line by line; it's
almost always precise about the problem (e.g., "expected an `<h1>` tag,
found none" or "expected `calculateAverage([10,20,30])` to return `20`, got
`undefined`").

### I accidentally edited a file inside a `tests/` folder
Undo it before committing:
```bash
git checkout -- assignments/week02-html-basics/tests/test.js
```
If you already committed it, ask your instructor — it's easy to fix and
won't affect your grade.

### I started editing before creating a branch, and I'm still on `main`
No problem — move your uncommitted changes to a new branch:
```bash
git checkout -b week02-html-basics
```
Git carries your uncommitted edits over to the new branch automatically.

### I want to abandon my changes and start an assignment over
```bash
git checkout -- assignments/week02-html-basics/
```
This discards uncommitted changes to that folder and restores it to the
last commit. **This cannot be undone — make sure you actually want to
discard your work first.**

### "fatal: A branch named 'week02-html-basics' already exists"
You already created this branch earlier (perhaps in a previous lab session).
Just switch to it instead of creating it again:
```bash
git checkout week02-html-basics
```

### I opened two Pull Requests for the same assignment by mistake
Close the extra one (there's a "Close pull request" button near the bottom
of its page) and keep working on the original one — pushing new commits to
the same branch updates its existing PR automatically.

### None of this covers my problem
Copy the exact error message and bring it to lab — a precise error message
is almost always enough to diagnose the problem quickly.
