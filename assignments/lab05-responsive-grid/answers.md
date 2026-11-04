# Lab 5 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 `@media (max-width: 600px)` applies when the screen is 600px or (wider / narrower):Narrower
- W2 Without the viewport tag, a phone pretends its screen is (wide / narrow):Wide

## Numbers

Write ONE number after each colon (no "px"). Don't change anything else on the line.

Use the CSS you wrote in Part B for N1 and N2.

- N1 The screen is exactly 600px wide. How many columns does `.cards` have:1
- N2 The screen is 601px wide. How many columns does `.cards` have:3
- N3 A grid is 520px wide, with `gap: 20px` and `grid-template-columns: 2fr 1fr 1fr`. How wide is the first column, in pixels:240

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Your `@media` block sits below the normal `.cards` rule. On a small screen, why does the rule inside `@media` win? What would go wrong if you moved the whole `@media` block to the top of the file?

Your answer:
When both rules match on a small screen, the one written later in the file wins because CSS reads from top to bottom. So the media query rule wins because it is below the normal rule. If I moved the media query to the top, the normal three-column rule would come after it and win, so the cards would stay in three columns even on a phone.

## Q2. Before Part C, the cards stacked when you dragged the window narrow, but not in phone mode. What does the viewport tag tell the phone, and why did that fix it?

Your answer:
The viewport tag tells the phone to use its real screen width instead of pretending to be a wide desktop screen. Before this, the phone was pretending to be about 980px wide, so the max-width 600px rule never matched. After adding the tag, the phone reports its true narrow width, so the media query matches and the cards stack.
