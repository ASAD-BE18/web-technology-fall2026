# Lab 4 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 By default, `justify-content` works along which axis (main / cross):main
- W2 By default, `align-items` works along which axis (main / cross): cross
- W3 With `flex-direction: column`, `justify-content` moves items in which direction (horizontal / vertical): vertical
- W4 By default, is an `<a>` element block or inline (block / inline): inline

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Setting `width` on the menu links did nothing until you added `display: inline-block`. Why?

Your answer:  By default, an <a> element is inline, so its width and height cannot be set in the usual way. Adding display: inline-block allows us to set its width and height while keeping it in the same line as other elements.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer: The display: flex property is added to the parent element. It arranges the direct children in a row by default and makes it easier to control their spacing and alignment.
