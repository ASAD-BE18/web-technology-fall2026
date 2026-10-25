# Lab 3 — Part D answers

## Box-model numbers

Write ONE number after each colon (pixels, no "px"). Don't change anything else on the line.

A box has `width: 300px; padding: 20px; border: 5px solid; margin: 10px;`

- N1 how wide the box is, not counting margin, with the default box-sizing:350
- N2 how wide the box is, not counting margin, with `box-sizing: border-box`:300
- N3 how wide the content area is, with `box-sizing: border-box`:250

## Explain it
Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?

Your answer: The second paragraph shows the colour set by #special because an ID selector has higher specificity than a class selector like .note. Therefore, the ID selector takes priority when both rules apply to the same paragraph, assuming no other rule overrides them.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer: Padding is the space inside an element, between its content and its border. Margin is the space outside the border that separates the element from other elements. The padding area gets the card's background colour, while the margin area is transparent.
