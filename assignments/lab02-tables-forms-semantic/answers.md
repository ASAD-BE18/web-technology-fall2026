# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

The for and id link the label to its input. Clicking the label puts the cursor in the box, and screen readers read the label aloud. If they don’t match, clicking does nothing and screen reader users don’t know what to type.

## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer:A <section> is a themed part of a page with a heading, like a timetable or join form. An <article> is content that makes sense on its own, like a news or blog post. The hackathon story is complete by itself (heading, picture, text), so it is an <article>.

## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:<th> is a header cell (like Day, Time, Activity) that is bold and centered by default. <td> is a normal data cell (like Monday, 4 PM). Tables are only for data, so using them for page layout confuses screen readers, looks bad on mobile, and is hard to maintain. Use CSS for layout instead.
