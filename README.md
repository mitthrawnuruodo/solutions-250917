# Lesson Task: DOM (Part 2)
## A. Events
1. Make a button that changes the background color of the page when clicked.
1. Show a message in the console when the page has fully loaded.
1. Add an image and show a message when it has finished loading.
1. Change the text of a `<div>` when the mouse hovers over it, and change it back when the mouse leaves.
1. Add an `<input>` field that logs its value to the console every time it changes.
1. Create a simple form with one input. Prevent it from reloading the page and log the submitted value.
1. Add an `<input>` field and log each key the user presses and releases.

## B. Form Validation
8. Make a form with an email input and a password (min 6 chars). Use HTML5 validation attributes (`required`, `type`, `minlength`).
8. Extend the form with a confirm password field. Use JavaScript + the Constraint Validation API (`setCustomValidity`) to ensure the two passwords match.

## C. Creating and Inserting Nodes
10. Add a button that, when clicked, creates a new `<p>` element with some text and appends it to a `<div>`.
10. Insert a new `<li>` into the second position of a list using `insertBefore`.
10. Replace the last item in a list with a new `<li>` that says “I’m new!” using `replaceChild`.
10. Remove the first `<li>` of a list using `.remove()`.

## D. To-Do List Mini Project
14. Build a simple to-do list:
    * An input and a submit button inside a form.
    * Submitting the form adds a new `<li>` with the task text.
    * Each `<li>` should have a "X" button that removes it.

## E. DOM Collections
15. Use `getElementsByTagName("li")` to get an `HTMLCollection`. Add a new `<li>` and confirm the collection updates automatically.
15. Use `querySelectorAll("li")` to get a `NodeList`. Add another `<li>` and confirm the NodeList does **not** update.
15. Convert one of these collections to an array with `Array.from()` and use `.forEach()` to log each item’s text.

## F. Filtering and Sorting
18. Create a list of fruits. Add:
    * A **Filter** input: typing filters the list (show only matches).
    * A **Sort** button: sorts the list alphabetically.
    * A **Reverse** button: reverses the list.
    * A **Restore** button: restores the original order.