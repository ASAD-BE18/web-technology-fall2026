# Lab 3 — Part D answers

## Box-model numbers




A box has `width: 300px; padding: 20px; border: 5px solid; margin: 10px;`

- N1 how wide the box is, not counting margin, with the default box-sizing:350
- N2 how wide the box is, not counting margin, with `box-sizing: border-box`:300
- N3 how wide the content area is, with `box-sizing: border-box`:250

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?

Your answer:The second paragraph shows orange, which is the colour set by #special. This happens because an id selector is more specific than a class selector, so the #special rule wins over the .note rule even though both set a colour


## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer: Padding is the space inside the border, between the content and the border, while margin is the space outside the border that separates the card from other elements. The card's background colour fills the content and the padding area, but the margin always stays transparent
