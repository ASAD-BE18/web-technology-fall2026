# Lab 4 — Part D answers

## One-word answers

Write ONE word after each colon, from the choices in brackets. Don't change anything else on the line.

- W1 By default, `justify-content` works along which axis (main / cross): main
- W2 By default, `align-items` works along which axis (main / cross): cross
- W3 With `flex-direction: column`, `justify-content` moves items in which direction (horizontal / vertical): vertical
- W4 By default, is an `<a>` element block or inline (block / inline): inline

## Explain it

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. Setting `width` on the menu links did nothing until you added `display: inline-block`. Why?

Your answer: The <a> tag is an inline element by default and inline elements ignore width and height properties. When we set 'display: inline', it allows the element to stay inline but now it can accept width, height, padding and margin like a block element.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer: 'display: flex' is always applied to the parent container, which makes all its direct children become flex items. This changes how the children are arranged and aligned, letting us control their layout with flexbox properties.
