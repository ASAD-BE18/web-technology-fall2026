# Lab 3 — Part D answers

## Box-model numbers

Write ONE number after each colon (pixels, no "px"). Don't change anything else on the line.

A box has `width: 300px; padding: 20px; border: 5px solid; margin: 10px;`

- N1 how wide the box is, not counting margin, with the default box-sizing: 350
- N2 how wide the box is, not counting margin, with `box-sizing: border-box`: 300
- N3 how wide the content area is, with `box-sizing: border-box`: 250

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?

Your answer:
It shows the colour set by #special. This is because an ID selector has higher specificity than a class selector, so ID with 100 points wins over class with 10 points.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer:
Padding is the space inside an element between the content and the border, while margin is the space outside the element between it and other elements. Padding gets the card's background colour because background extends to the padding area, but margin stays transparent and shows the page background.