// Names: __________________ & __________________
// Part 2: run with  node part2.js

// A pretend database. Both functions return promises and take a little while.

// Takes about 1 second. Any id above 0 works. An id of 0 or less fails.
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) resolve({ id: id, name: "User " + id })
            else reject("No user with that id")
        }, 1000)
    })
}

// Takes about half a second. Gives back a list of that user's posts.
function getPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                user.name + "'s first post",
                user.name + "'s second post",
                user.name + "'s third post"
            ])
        }, 500)
    })
}

// ---- your code goes below this line ----

