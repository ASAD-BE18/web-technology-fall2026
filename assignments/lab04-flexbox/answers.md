# Lab 4 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 By default, `justify-content` works along which axis (main / cross):main
- W2 By default, `align-items` works along which axis (main / cross):cross
- W3 With `flex-direction: column`, `justify-content` moves items in which direction (horizontal / vertical):vertical
- W4 By default, is an `<a>` element block or inline (block / inline):inline

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Setting `width` on the menu links did nothing until you added `display: inline-block`. Why?

Your answer:an inline element ignores width and height because it only takes as much space as its content but inline block accept the width and height as a box and stays on the line An <a> tag is inline by default. When I change it to inline-block, the width starts working.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer:  i write display: flex  on the parent, and it becomes a flex container. By default, the children are placed in a row, side by side, not stacked. After that, I can use justify-content and gap to control the position and the space between them. For example, in my cards section, the cards sit next to each other in the center of the row with a 20px gap.
