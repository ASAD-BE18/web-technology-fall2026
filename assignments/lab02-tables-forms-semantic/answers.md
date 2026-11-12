# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own words. Don't delete or change the question lines.

Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer:
A `<label>`'s `for` attribute must match its corresponding `<input>`'s `id` so that browsers and assistive technologies can programmatically link them together. If they do not match, clicking on the label text will not automatically focus or select the input field, which degrades accessibility and user experience for everyone, especially users with motor or visual impairments.

Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer:
A `<section>` is a generic thematic grouping of content, typically with a heading, whereas an `<article>` represents a self-contained, independent piece of content that could theoretically be distributed or syndicated on its own. The news or event story became an `<article>` because it stands alone as a complete piece of information that makes sense out of context.

Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:
A `<th>` element defines a table header cell, which usually renders bold and centered text by default for data titles, while a `<td>` element defines standard table data cells for regular content. Tables should never be used for entire page layouts because they lack semantic meaning for structure, create accessibility barriers for screen readers, and result in rigid, non-responsive designs that fail on mobile devices.
