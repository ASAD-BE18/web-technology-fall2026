# Lab 3 — Part D answers

## Box-model numbers

Write ONE number after each colon (pixels, no "px"). Don't change anything else on the line.

A box has `width: 300px; padding: 20px; border: 5px solid; margin: 10px;`

- N1 how wide the box is, not counting margin, with the default box-sizing:
- N2 how wide the box is, not counting margin, with `box-sizing: border-box`:
- N3 how wide the content area is, with `box-sizing: border-box`:

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?

Your answer:The paragraph will display the color defined by the #special ID selector because it has a higher specificity value than the .note class selector. In CSS rules, ID selectors always override class selectors.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer:Padding creates space inside the element's border, while margin creates space outside of the element's border to separate it from others. The padding area receives the card's background color because it is part of the element's internal structure.
