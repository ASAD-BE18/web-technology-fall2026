# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer:The `for` attribute is what connects a label to a specific input, so its value has to be exactly the same as that input's `id`. When they match, clicking the label text focuses the input, and screen readers announce the label when someone reaches the field. If they don't match, the label is just plain text with no link to the input, so clicking it does nothing and people using assistive technology won't know what the field is for.


## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer:A `<section>` groups related content under a theme or heading within a page, like "News" or "About," and it doesn't need to make sense on its own. An `<article>` is a complete, self-contained piece of content that could be published or shared separately, such as a news story or blog post. The hackathon story became an `<article>` because it has its own heading and full content, and it would still make sense if it were copied to another page or an RSS feed.


## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:A `<th>` is a table header cell that labels a column or row, and browsers usually make it bold and centered, while a `<td>` is a regular data cell that holds the actual content. Tables should only be used for tabular data, not whole-page layouts, because they're meant to show rows and columns of related information. Using them for layout confuses screen readers, makes the page hard to adapt to different screen sizes, and is harder to maintain than CSS tools like Flexbox or Grid.
