# Test Driven Development (TDD)

Outline for stream on Test Driving Development

- Part 1: TDD in JS (spend most of the time here, maybe come up with more applicable real-world examples than the starter functions)

Time permitting...or skip to Cypress e2e test if it's more interesting.

- Part 2: Show how we would configure the same thing with Typescript.
- Part 3/4: Test a component in React with Jest. Show an End to End test with Cypress.

## Why write automated tests for code?

Chances are you probably test your code a little before you send it off to your boss or deploy your website.
Clicking the button or running the function to see if it outputs what you need. However, manual tests are slow,
and as the program grows we are not able to test all the code that we previously wrote. Automated tests are very fast,
and can be set up to run with every commit to version control.

1. Improves the quality of code, fewer bugs make it to customers.
2. Helps communicate during code review.
3. Code that has automated tests is much easier for future you and other developers to work on.
4. Helps prevent accidental regression (bugs in previously working code) when you make changes.

The Testing Pyramid

![Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

[Source: martinfowler.com](https://martinfowler.com/articles/practical-test-pyramid.html)

## What is TDD?

TDD is a software development practice or discipline of writing tests before the code being tested in order to guide
the development of the code. It has several benefits compared to writing tests after the code is written:

1. Focuses the developer on the **requirements**.
1. Code will naturally be more testable, less need for stubs and mocks.
1. Code will likely be more modular, smaller functions.
1. Encourages simpler, less coupled designs.
1. The developer will be more confident in their code on completion.
1. The developer will likely have a deeper understanding of their code.

### The TDD Process

You might hear these steps referred to as Red, Green, Refactor.

![TDD Process](https://miro.medium.com/max/1400/1*tZSwCigaTaJdovyWlp5uBQ.jpeg)

[Source: Medium](https://medium.com/@vaibhav.dby/test-driven-development-understanding-the-business-better-9c4cae4cb990)

1. Add a test
2. Run _all_ tests. The new test **should fail** for expected reasons. (Red)
3. Write the simplest code to make the test pass. Sloppy or draft code is okay.
4. Run the tests, they should pass. (Green)
5. Refactor the code. Make it right. (while keeping tests passing)
6. move code
7. extract functions
8. rename identifiers

When you need to add new functionality to your code, start back at Step 1.

## Who should use TDD?

My recommendation is to use it on any software you plan to use longer than 6 months, or are
working with a team of multiple developers. Writing tests can be difficult and requires practice. It will feel
slower at first, but with practice you will develop a rhythm and may even be faster at developing working code.

![TDD Process Detailed](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/TDD_Global_Lifecycle.png/1920px-TDD_Global_Lifecycle.png)

[Source Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)
