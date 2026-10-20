# Lab 3 — Part D answers

Box-model numbers
N1 how wide the box is, not counting margin, with the default box-sizing: 350

N2 how wide the box is, not counting margin, with box-sizing: border-box: 300

N3 how wide the content area is, with box-sizing: border-box: 250

Explain it
Q1. In your page, .note and #special both set a colour for the second paragraph. Which colour does it show, and why?

Your answer:
The browser shows the colour applied by the ID selector (#special) because IDs have a higher specificity than class selectors (.note) in CSS. When multiple conflicting styles target the same element, the rule with the higher specificity always overrides the others regardless of the order.

Q2. What is the difference between padding and margin? Which one gets the card's background colour?

Your answer:
Padding is the space inside the element's border between the content and the edge, whereas margin is the outer space that separates the element from other surrounding elements. The padding area gets the card's background colour because it is considered part of the element itself, while the margin remains transparent and shows the parent background.
