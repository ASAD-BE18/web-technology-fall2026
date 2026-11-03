# Lab 3 — Part D answers

## Box-model numbers

Write ONE number after each colon (pixels, no "px"). Don't change anything else on the line.

A box has `width: 300px; padding: 20px; border: 5px solid; margin: 10px;`

- N1 how wide the box is, not counting margin, with the default box-sizing: 350
- N2 how wide the box is, not counting margin, with `box-sizing: border-box`:300
- N3 how wide the content area is, with `box-sizing: border-box`: 250

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?

Your answer: It shows the color from #special because id selectors are more specific than class selectors. So even though. note also targets the same paragraph, the browser applies the style from #special due to its higher specificity.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer: Padding is the space inside the element between the content and the border, and margin is the space outside the element between the border and other element. The background color of the card covers the content and padding, but it doesn't extend into the margin.
