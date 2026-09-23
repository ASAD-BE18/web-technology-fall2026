# FAQ & Troubleshooting

Check here before asking for help. These are the mistakes almost every
student runs into in their first few weeks.

## Getting set up

### "git commit" says I need to configure my name and email
Run these inside your `web-technology-fall2026` folder (no `--global`, so
the next student on this PC doesn't commit as you):
```bash
git config user.name "YOUR-USERNAME"
git config user.email "YOUR-NOREPLY-ADDRESS@users.noreply.github.com"
```
Your no-reply address is on github.com under **Settings → Emails**.

### Git asks for my password and then says "Authentication failed"
GitHub doesn't accept account passwords from Git. When the sign-in window
appears, choose **"Sign in with your browser"** and approve access in the
browser. If no window appears, ask your instructor. The lab PC may need Git
Credential Manager (it comes with Git for Windows).

### I get "Permission denied" or "403" when I push
There are two usual causes:
1. **You're pushing to the course repository instead of your fork.** Run
   `git remote -v`. The `origin` URL must contain **your** username. If it
   doesn't, you cloned the wrong repository. Clone your fork instead.
2. **The PC is still signed in as the previous student.** The error names
   their username. Sign them out, then push again and sign in as yourself:
   ```bash
   printf "protocol=https\nhost=github.com\n\n" | git credential reject
   ```
   (Windows alternative: **Control Panel → Credential Manager → Windows
   Credentials**, remove the `git:https://github.com` entry.)

## New assignments

### The new assignment folder isn't in my `assignments/` folder
You probably pulled from your fork (`origin`) instead of the course
repository (`upstream`). Run:
```bash
git checkout main
git pull upstream main
git push origin main
```
If Git says `'upstream' does not appear to be a git repository`, add it
first:
```bash
git remote add upstream https://github.com/ASAD-BE18/web-technology-fall2026.git
```

### I already created my branch before pulling the new assignment
Switch back and bring the new work into your branch:
```bash
git checkout main
git pull upstream main
git checkout week04-css-box-model
git merge main
```

## Pull Requests and checks

### My Pull Request is comparing into the wrong repository/branch
Look at the two dropdowns at the top of the "Open a pull request" page. The
**base** (left) must be `ASAD-BE18/web-technology-fall2026` → `main`. The
**compare** (right) must be your fork's assignment branch. Change them if
GitHub guessed wrong.

### My checks say "Workflow awaiting approval"
GitHub asks your instructor to approve checks for brand-new contributors.
Nothing is wrong with your code. Tell your instructor in lab. It stops
happening after your roster PR is merged.

### The check is stuck on a yellow dot for a long time
Give it a few minutes. When a whole lab submits at once, checks can queue.
If it's still stuck after 10 minutes, tell your instructor.

### Autograde failed but my code looks right to me
Click **Details** next to the failed check. It shows the exact test output,
including which check failed and usually what was expected (for example,
`expected at least 3 <li> items inside <ul>, found 2`). Read it line by
line. It's almost always precise about the problem.

### The author-tag test fails only on GitHub, not on the lab PC
The username in your file must match the GitHub account that **opened the
Pull Request**. Check the spelling (capital letters don't matter). Also
check you didn't start from a classmate's file.

### Submission guard failed
It lists exactly which file broke the rule. Usually it's one of these:
- **You edited something in `tests/`.** Restore it, commit, and push:
  ```bash
  git checkout main -- assignments/week02-html-basics/tests/
  git commit -m "Restore original tests"
  git push
  ```
- **You changed a file outside the assignment folder** (or in another
  week's folder). Restore it the same way:
  `git checkout main -- path/to/that/file`, then commit and push.
- **Your roster file isn't named exactly after your GitHub username.**

### I accidentally edited a file inside a `tests/` folder (not committed yet)
```bash
git checkout -- assignments/week02-html-basics/tests/
```

### I started editing before creating a branch, and I'm still on `main`
No problem. Move your uncommitted changes to a new branch:
```bash
git checkout -b week02-html-basics
```
Git brings your uncommitted edits over to the new branch.

### I want to abandon my changes and start an assignment over
```bash
git checkout -- assignments/week02-html-basics/
```
This throws away uncommitted changes to that folder. **It cannot be
undone.**

### "fatal: A branch named 'week02-html-basics' already exists"
You created this branch earlier. Switch to it instead:
```bash
git checkout week02-html-basics
```

### I opened two Pull Requests for the same assignment by mistake
Close the extra one (**Close pull request**, near the bottom of its page).
Keep working on the original. New pushes to the same branch update it
automatically.

## When Git won't cooperate

### Git isn't working on this PC at all
You can still submit from the browser. On github.com, open **your fork**,
switch to your assignment branch (branch dropdown, top left), open the file,
and click the pencil icon (or press `.` for the full web editor). Commit to
the same branch. Your Pull Request updates and Autograde runs as usual.
You can't run the tests yourself this way, so read the Autograde output
carefully.

### None of this covers my problem
Copy the exact error message and bring it to lab. A precise error message is
almost always enough to find the problem quickly.
