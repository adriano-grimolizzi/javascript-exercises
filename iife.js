// Immediately Invoked function expression - an IIFE declares a function and then runs it immediately.

(function() {
    console.log("qwerty");
})();

// Advantages: anything inside it has its own scope, and because it is a function, it can pass something out of the scope:

// This function reports the number of thimes it's been called in a way that can't be tampered with:

const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`;
    }
})();
