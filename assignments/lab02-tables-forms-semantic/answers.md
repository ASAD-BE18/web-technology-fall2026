# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

The for attribute in the <label> must exactly match the id of the <input> so the browser knows they are connected. If they do not match, clicking on the label's text will not select the input box, and screen readers will not be able to read the form correctly for blind users.

## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

A <section> is used to group related parts of a webpage together, while an <article> is used for independent content that makes complete sense on its own. The hackathon story became an <article> because it is like a news post or blog entry that can be read and shared separately from the rest of the page.

## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

The <th> tag is used for the header cells in a table, which automatically makes the text bold and centered. The <td> tag is used for the regular data cells that contain normal text. You should never use a table to lay out a whole webpage because it breaks the design on mobile phone screens and makes the page very confusing for screen reader software to read.
