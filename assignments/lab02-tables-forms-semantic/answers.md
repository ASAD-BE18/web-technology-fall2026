# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer:

The for attribute connects a label to an input field.
Its value must be the same as the input's id.
Clicking the label then focuses or selects the related input.
If they do not match, the label will not work correctly with that input.
Example:
for="email" matches id="email"

## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer:

<section> groups related content under a heading.
<article> contains independent content that can make sense on its own.
The timetable and join form are sections because they are parts of the same webpage.
The hackathon story is an article because it is a separate story that can be understood independently.


## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:

<th> defines a table heading, such as Day, Time, and Activity.
<td> contains actual data, such as Monday or 10 AM.
Tables should be used to present tabular data, not to arrange the whole webpage.
Using tables for page layout makes the HTML less meaningful and can make accessibility and responsive design harder.
