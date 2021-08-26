// Closure: intentionally defining a function in a specific scope so that it explicitly has access to that scope.
// "Closing the scope around the function"

let globalFunction;
{
    let blockVar = 'asdf';
    globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc(); // asdf

// The block and its parent scope, the global scope, form a closure. No matter where you call globalFunc from, it will have access
// to the identifier in that closure.

// When we call globalFunc, it has access to blockVar despite the fact that we've exited that scope.
// Normally, when a scope is exited, the vars declared therein can safely cease to exist.
// JS notes that a function is defined in that scope, so it has to keep the scope around.
  
