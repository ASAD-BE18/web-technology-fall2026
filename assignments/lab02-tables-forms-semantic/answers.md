# Lab 2 — Part D answers

Write at least 2 full sentences under each "Your answer:" line, in your own
words. Don't delete or change the question lines.

## Q1. In your form, why must a `<label>`'s `for` match its `<input>`'s `id`? What goes wrong if they don't match?

Your answer:Semantic tags provide meaningful structure to web pages so browsers and screen readers understand what each section represents. Using elements like `<header>`, `<main>`, and `<footer>` instead of plain `<div>` tags improves accessibility for visually impaired users and makes the code far easier for developers to maintain.

## Q2. You used both `<section>` and `<article>`. What is the difference? Why did the hackathon story become an `<article>`?

Your answer:Connecting a `<label>` to its `<input>` using matching `for` and `id` attributes ensures that screen readers can announce the field name when a user selects an input. Furthermore, it improves usability because users can click on the text label itself to focus or check the input box.

## Q3. What is the difference between `<th>` and `<td>`? Why should a table never be used to lay out a whole page?

Your answer:Using headings in sequential order (`<h1>`, then `<h2>`) allows screen reader users to navigate logically through the main sections of a page without getting lost. Similarly, adding clear table headers (`<th>`) enables assistive devices to announce cell values alongside their corresponding column headers so tabular data makes sense.
