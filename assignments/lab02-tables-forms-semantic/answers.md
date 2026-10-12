# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer: Matching the label's for attribute with the input's id establishes a programmatic link between the form label and its input field. If they do not match, screen readers will fail to announce the label to visually impaired users, and clicking on the label text will not focus the input box.

## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer: A section element represents a general thematic grouping of content, whereas an article represents an independent and self contained piece of content. The hackathon story became an article because it is a standalone news item that can make complete sense on its own outside the page layout.

## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer: The th tag defines a header cell with semantic meaning and default bold text, while the td tag defines a standard data cell. Tables should never be used for page layout because they break accessibility for screen readers and make the webpage rigid and difficult to adapt for mobile screens.
