// The oldest async mechanism.
// A callback is a function that will be invoked at some point in the future.

console.log("Before timeout: " + new Date())

const f = () => {
    console.log("After timeout: " + new Date())
}

setTimeout(f, 1000)

console.log("I happen after setTimeout")
