# Lecture 12 In-Class Activity: Async JavaScript, Part 2

Work with a partner. We'll stop three times to talk about what people found, so when you get to a **Stop** line, finish what you're doing and wait for the rest of the class.

Each part has its own file. Run them one at a time from the terminal, for example `node part1.js`. Parts 1 and 2 use a pretend database (`getUser` and `getPosts`) that's already written at the top of the file. Read those two functions before you start, but don't change them.

This time the parts tell you what your code should do, not how to do it. If you're stuck, the lecture slides and MDN are fair game.

## Part 1: Promise chains (about 8 minutes)

**Goal:** starting from `getUser(1)`, print the user's name and then how many posts they have, using `.then()`. No nesting: every `.then()` should hang off the one before it, in a single flat chain.

Once that works, answer these by experimenting in your code:

- What does a call to `.then()` actually give back? Is it the same thing you called it on?
- If one step in your chain returns a plain value, like a number, what does the next step receive? What if it returns a promise instead?
- What does the next step receive if a step doesn't return anything at all?

**Stop.** Be ready to share what you found for each of those three questions, and how you figured it out.

## Part 2: async/await (about 8 minutes)

**Goal 1:** do the same thing as Part 1 (print user 1's name, then their number of posts), but with an `async` function and `await` instead of `.then()`.

**Goal 2:** find out what your `async` function gives back when you call it. Does that fit with what you found in Part 1?

**Goal 3:** print the names of users 1, 2, and 3. Each call to `getUser` takes about a second, but all three names need to be printed in **under 1.5 seconds total**. Use `console.time()` and `console.timeEnd()` to check.

**Stop.** Be ready to share what your `async` function returned, what your first time was for Goal 3, and what you changed to get it under 1.5 seconds.

## Part 3: fetch (about 6 minutes)

`part3.js` has the address of a free practice API that sends back fake to-do items.

**Goal 1:** print the title of to-do number 1.

**Goal 2:** there's no to-do with the id 99999. Make your code print a clear "not found" message when it asks for that one, instead of printing something useless or crashing.

Before you work on Goal 2, point your code at `/todos/99999` and write down a guess in a comment: will a `catch` handle it for you? Then run it and find out.

**Stop.** Be ready to share your guess, what actually happened, and how you got the "not found" message to show.

## If you finish a part early

Stay on the part you're on and try one of these:

- In Part 1, have a step return an object you make yourself that has its own `then` method, like `{ then(resolve) { resolve(42) } }`. What does the next step receive?
- Make one promise and attach two separate `.then()` calls to it. Do both get the value?
- In Part 2, what happens to your under-1.5-seconds version if one of the ids is `-1`?
- In Part 3, print the titles of to-dos 1, 2, and 3, fetching all three at the same time.

## Before you leave

Put both of your names at the top of each file, then commit and push before the end of class.
