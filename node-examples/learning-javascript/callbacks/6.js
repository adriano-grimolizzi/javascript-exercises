// PROMISES

// Using promises will generally result in safer, easier-to-mantain code.

// Promises ensure that callback are always handled in the same 
// predictable manner.

// BASIC IDEA: calling a promise-based async function, returns a Promise instance.
// 2 things can happen: it can be fulfilled or rejected.
// You are guaranteed that only one those thing will happen
// and the result will happen only ONCE.
// Once a promise has either been fulfilled or rejected, it's considered to be settled.

// You create a new Promise instance with a function that has resolve (fulfill) and reject callbacks.

const countdown = (seconds) => new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
        setTimeout(() => {
            if (i > 0) console.log(i + '...')
            else resolve(console.log("GO!"))
        }, (seconds - i) * 1000)
    }
})

// You could call resolve or reject multiple times ro mix them up... 
// but only the first call will count.
// The promise will make sure that whoever is using it will only get 
// a fulfillment or a rejection.

const promise = countdown(5)

promise.then(
    () => console.log('countdown completed successfully'),
    (error) => console.log(error))

// promise.then(() => console.log('countdown completed successfully'))
// promise.catch((error) => console.log(error))
