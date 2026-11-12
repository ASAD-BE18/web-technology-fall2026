# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer: The for attribute must match the input's id so the browser knows which label belongs to which input. This makes the form accessible — clicking the label focuses the input and screen readers can read it correctly. If they don't match, clicking the label does nothing and accessibility tools cannot associate them, which fails WCAG.


## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer: <section> is for grouping related content thematically, while <article> is for self-contained content that could stand alone. A hackathon story is an article because it is a complete independent story that could be shared or syndicated on its own, not just a grouping inside a page.

## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:  <th> is a table header cell which is bold, centered, and tells screen readers it's a header, while <td> is a normal data cell. You should never use a table to lay out a whole page because tables are only for tabular data — using them for layout breaks accessibility for screen readers, makes the page not responsive on mobile, and is bad semantic HTML.
