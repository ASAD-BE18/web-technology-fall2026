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

Your answer:By default link tags are inline elements, so browsers ignore width and height properties set on them. Changing their display property to inline-block allows them to respect width settings while still sitting on the same line.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer:display: flex must be applied to the parent container element. Adding it converts all immediate child elements into flex items which automatically line up horizontally side-by-side by default.
