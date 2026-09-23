# Submission Workflow — Exact Steps for Every Assignment

Follow this page in order, every time. Once you've done it twice it becomes
automatic.

> **Where to type commands:** on Windows lab PCs, open **Git Bash** (it comes
> with Git — right-click inside a folder → "Open Git Bash here"). Every
> command on this page is written for Git Bash.

Two names you'll see everywhere:

| Name | What it points to |
|---|---|
| `origin` | **Your fork**, `github.com/YOUR-USERNAME/web-technology-fall2026`. You push here. |
| `upstream` | **The course repository**, `github.com/ASAD-BE18/web-technology-fall2026`. New assignments appear here. You pull from here. |

---

## One-time setup (Week 1 lab)

1. **Create a free GitHub account** at github.com. Choose a username you'd
   be happy for an employer to see. Use an email you'll still have after the
   course ends. Write your username and roll number on your instructor's
   sign-up sheet. Your roll number never goes into this repository.
2. **Keep your email private.** On github.com: your picture (top right) →
   **Settings → Emails** → tick **"Keep my email addresses private"**. Copy
   the address shown there that ends in `@users.noreply.github.com`. You'll
   use it below instead of your real email, so your email never appears in
   this public repository.
3. **Fork the course repository.** Open
   `https://github.com/ASAD-BE18/web-technology-fall2026` and click **Fork**
   (top right) → **Create fork**. You now have your own copy at
   `https://github.com/YOUR-USERNAME/web-technology-fall2026`.
4. **Do the "Start of every lab" steps below** for the first time.
5. **Add your roster file**. This is your first practice Pull Request:
   ```bash
   git pull upstream main
   git checkout -b roster
   echo "Hello from YOUR-USERNAME" > roster/YOUR-USERNAME.md
   git add roster/YOUR-USERNAME.md
   git commit -m "Add YOUR-USERNAME to the class roster"
   git push origin roster
   ```
   The first push opens a **GitHub sign-in window**. Choose **"Sign in with
   your browser"** and approve. Your GitHub password typed into Git will
   **not** work.
6. Open a Pull Request for the `roster` branch (Step 7 below explains how).
   Your instructor merges it. Then run `git checkout main`.

---

## Start of every lab

Lab PCs are shared, so you usually start from a fresh copy. Your work is
safe because it lives on GitHub once you've pushed it.

```bash
# 1. Download your fork (replace YOUR-USERNAME):
git clone https://github.com/YOUR-USERNAME/web-technology-fall2026.git
cd web-technology-fall2026

# 2. Connect it to the course repository, where new assignments appear:
git remote add upstream https://github.com/ASAD-BE18/web-technology-fall2026.git

# 3. Tell Git who you are, for THIS folder only (no --global), so the next
#    student on this PC doesn't commit under your name:
git config user.name "YOUR-USERNAME"
git config user.email "YOUR-NOREPLY-ADDRESS@users.noreply.github.com"
```

Check it worked:

```bash
git remote -v
```

You should see **two** names. `origin` has your username in it, and
`upstream` has `ASAD-BE18`.

*(If the PC kept your folder from last time under your own login, skip the
clone. Just `cd` into the folder and run `git remote -v` to check.)*

---

## Every assignment

### Step 1 — Get the newest assignments

New assignments are added to the **course repository** (`upstream`), not to
your fork. So pull from `upstream`, then save the update to your fork:

```bash
git checkout main
git pull upstream main
git push origin main
```

You should now see the new folder in `assignments/`.

*(Browser alternative: on your fork's page on github.com, click **Sync fork →
Update branch**, then run `git pull origin main`.)*

### Step 2 — Create (or continue) the branch for this assignment

Use the exact folder name from `assignments/` as your branch name.

**Starting the assignment:**
```bash
git checkout -b week02-html-basics
```

**Continuing it in a later lab** (after a fresh clone):
```bash
git checkout week02-html-basics
```
Git finds the branch on your fork and brings your earlier work back.

### Step 3 — Read the assignment spec

Open `assignments/week02-html-basics/README.md` and read all of it before
you touch any code. It also gives the due date.

### Step 4 — Do the assignment

Edit the starter file(s) inside `assignments/week02-html-basics/`. **Don't
rename files, and don't edit anything in the `tests/` folder** or anywhere
outside this assignment's folder. The Submission guard check fails if you do.

### Step 5 — Test your own work

Each assignment's `README.md` gives the exact command. It's usually one of
these:

```bash
# HTML / CSS / JavaScript assignments:
node --test assignments/week02-html-basics/tests/test.js

# PHP assignments:
php assignments/week12-php-forms/tests/test.php
```

Fix anything that fails, then run the command again until everything passes.
Your Pull Request runs these same tests.

### Step 6 — Commit and push

```bash
git add assignments/week02-html-basics/
git commit -m "Complete Week 2 HTML basics task"
git push origin week02-html-basics
```

### Step 7 — Open a Pull Request

1. Go to your fork on github.com. You'll see a yellow banner offering
   **"Compare & pull request"** for the branch you just pushed. Click it.
2. Check the top of the page. The **base repository** must be
   `ASAD-BE18/web-technology-fall2026` with base `main`, **not** your own
   fork.
3. Fill in the Pull Request template that appears.
4. Click **"Create pull request."**

### Step 8 — Watch the two automatic checks

Within a minute or two, near the bottom of your PR:

| Check | What it means |
|---|---|
| **Autograde** | Your assignment's tests. ✅ = every test passed. |
| **Submission guard** | You changed only the files you were allowed to. |

If either one shows ❌, click **Details** to see exactly what went wrong.

*(If you see "Workflow awaiting approval", your instructor needs to click
Approve. This usually only happens before your roster PR is merged.)*

### Step 9 — Fix and resubmit, if needed

Fix the code on the **same branch**, then repeat Step 6. Your Pull Request
updates by itself. **Don't open a second Pull Request for the same
assignment.** Your instructor grades what's on your PR at the deadline.
Anything you push after the deadline is marked as late.

### Step 10 — Wait for instructor review

Green checks mean your code does what the tests check. Your instructor still
reviews your code and leaves comments directly on your Pull Request.

---

## End of every lab (shared PCs — don't skip this)

```bash
# 1. Make sure everything is committed and pushed:
git status
git push

# 2. Sign Git out of your GitHub account on this PC:
printf "protocol=https\nhost=github.com\n\n" | git credential reject
```

3. **Sign out of github.com** in the browser too.
4. If everyone uses the same Windows login on this PC, **delete your
   `web-technology-fall2026` folder**. It's safe on GitHub, and you'll clone
   it again next lab.

If you skip step 2, the next person at this PC can push to **your** fork as
you.

---

## Submitting your next assignment

Go back to **Step 1**. Always start a new assignment from an up-to-date
`main` branch, never from your previous assignment's branch.
