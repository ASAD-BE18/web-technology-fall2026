# Lab 5 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 `@media (max-width: 600px)` applies when the screen is 600px or (wider / narrower):narrower
- W2 Without the viewport tag, a phone pretends its screen is (wide / narrow):wide

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

Your answer:The media query rule comes later, so when both rules have the same specificity and the screen is small, the later rule wins.f you move the whole @media block to the top, the normal .cards rule below it may override the media query, causing the cards to stay in three columns on small screens.

## Q2. Before Part C, the cards stacked when you dragged the window narrow, but not in phone mode. What does the viewport tag tell the phone, and why did that fix it?

Your answer:The viewport tag tells the phone to match the webpage's width to the device's screen width.Without it, the phone may use a wider virtual layout, so the @media (max-width: 600px) rule might not apply. Adding the tag lets the phone use the correct screen width, so the responsive layout works properly.
