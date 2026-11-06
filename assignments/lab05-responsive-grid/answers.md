# Lab 5 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 `@media (max-width: 600px)` applies when the screen is 600px or (wider / narrower): narrower
- W2 Without the viewport tag, a phone pretends its screen is (wide / narrow): wide

## Numbers

Write ONE number after each colon (no "px"). Don't change anything else on the line.

Use the CSS you wrote in Part B for N1 and N2.

- N1 The screen is exactly 600px wide. How many columns does `.cards` have: 1
- N2 The screen is 601px wide. How many columns does `.cards` have: 3
- N3 A grid is 520px wide, with `gap: 20px` and `grid-template-columns: 2fr 1fr 1fr`. How wide is the first column, in pixels: 240

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Your `@media` block sits below the normal `.cards` rule. On a small screen, why does the rule inside `@media` win? What would go wrong if you moved the whole `@media` block to the top of the file?

Your answer:
Both rules have the same specificity, so the one that comes later in the file wins, and the @media rule comes later. If I moved it to the top, the normal .cards rule would override it, so the small-screen layout would never apply.
## Q2. Before Part C, the cards stacked when you dragged the window narrow, but not in phone mode. What does the viewport tag tell the phone, and why did that fix it?

Your answer:
The viewport tag tells the phone to set the page width to the device’s real screen width instead of pretending to be a wide desktop screen (around 980px). Without it, the phone’s width never dropped below the @media breakpoint, so the small-screen rule never kicked in.