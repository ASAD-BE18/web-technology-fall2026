# Lab 5 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 `@media (max-width: 600px)` applies when the screen is 600px or (wider / narrower):narrower
- W2 Without the viewport tag, a phone pretends its screen is (wide / narrow): wide

## Numbers

Write ONE number after each colon (no "px"). Don't change anything else on the line.

Use the CSS you wrote in Part B for N1 and N2.

- N1 The screen is exactly 600px wide. How many columns does `.cards` have:1
- N2 The screen is 601px wide. How many columns does `.cards` have: 3
- N3 A grid is 520px wide, with `gap: 20px` and `grid-template-columns: 2fr 1fr 1fr`. How wide is the first column, in pixels: 240

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Your `@media` block sits below the normal `.cards` rule. On a small screen, why does the rule inside `@media` win? What would go wrong if you moved the whole `@media` block to the top of the file?

Your answer: The media query is placed below the normal CSS rule so that the mobile layout can override the three-column layout when the screen width is 600px or less. If we move the media query to the top, the normal CSS rule written later may override the mobile layout and the cards may remain in three columns.

## Q2. Before Part C, the cards stacked when you dragged the window narrow, but not in phone mode. What does the viewport tag tell the phone, and why did that fix it?

Your answer:The viewport tag tells the phone to use the actual device screen width for the webpage. This helps the browser apply the correct media query, so the cards stack into one column on a small screen and the text becomes easier to read.
