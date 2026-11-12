# Lab 4 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 By default, `justify-content` works along which axis (main / cross): main
- W2 By default, `align-items` works along which axis (main / cross): cross
- W3 With `flex-direction: column`, `justify-content` moves items in which direction (horizontal / vertical):vertical
- W4 By default, is an `<a>` element block or inline (block / inline):inline

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Setting `width` on the menu links did nothing until you added `display: inline-block`. Why?

Your answer: Anchor (<a>) elements are inline by default, so their width and height cannot be set normally. When we use display: inline-block, we can change their width and height while keeping them in the same line.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer: We apply display: flex to the parent element to make it a flex container. Its direct children become flex items and appear in a row by default, allowing us to control their alignment and spacing using flex properties.
