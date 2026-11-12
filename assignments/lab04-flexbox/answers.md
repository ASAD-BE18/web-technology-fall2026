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

Your answer:
By default anchor tags are inline elements and inline elements do not respect width and height. That is why setting width alone had no effect. When we add display: inline-block, the element can have a width and height like a block but still stays in the inline flow, so the width starts working.

## Q2. Does `display: flex` go on the parent or on the children? What happens to the children when you add it?

Your answer:
Display: flex is always set on the parent container, not on the children. Once the parent becomes a flex container, its direct children become flex items. They stop stacking vertically and line up in a row by default, and we can then control their alignment and spacing with flex properties on the parent.