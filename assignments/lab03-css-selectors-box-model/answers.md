# Lab 3 — Part D answers

## Box-model numbers
- N1 — how wide the box is, not counting margin, with the default box-sizing: 350
- N2 — how wide the box is, not counting margin, with `box-sizing: border-box`: 300
- N3 — how wide the content area is, with `box-sizing: border-box`: 250



## Q1. In your page, `.note` and `#special` both set a colour for the second paragraph. Which colour does it show, and why?


Your answer:

The second paragraph shows the red colour because the ID selector `#special` has higher specificity than the class selector `.note`. Therefore, the colour defined by `#special` takes priority over the colour defined by `.note`.

## Q2. What is the difference between `padding` and `margin`? Which one gets the card's background colour?

Your answer:

Padding is the space inside an element, between its content and its border. Margin is the space outside the border, between the element and other elements. Padding gets the card's background colour, while the margin is transparent.
