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
The second paragraph shows green, because `#special` sets the colour to rgb(0, 128, 0). An ID selector has a higher specificity than a class selector, so the ID rule wins over the `.note` rule (tomato). It does not matter that `.note` is written first in the file, because specificity is checked before the order of the rules.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer:
Padding is the space inside the border, between the content and the border of the box. Margin is the space outside the border, which keeps the box away from other elements. The card's background colour fills the content and the padding, but the margin stays transparent and does not get the background colour.