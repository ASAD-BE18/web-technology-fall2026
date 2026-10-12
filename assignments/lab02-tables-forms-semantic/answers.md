 Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Answer= The `for` attribute in a `<label>` must match the `id` of its `<input>` so the browser knows which input the label belongs to. If they don't match, clicking the label may not focus the correct input, making the form harder to use, especially for people who use assistive technology.

### Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?
Answer= A `<section>` groups related content together under a common topic, while an `<article>` contains independent content that can stand on its own. The hackathon story became an `<article>` because it is a complete piece of content that could be shared or read separately from the rest of the page.

### Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Answer= The `<th>` element defines a header cell in a table, while the `<td>` element defines a regular data cell. Tables should not be used to lay out a whole page because they are meant to display tabular data, and using them for page layouts makes the HTML harder to maintain and less accessible.
