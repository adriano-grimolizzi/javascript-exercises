const init = () => {
    const name = 'Mozilla'
    const displayName = () => {
        console.log(name)
    }
    displayName()
}
init()

/* 
init() creates a local variable called name and a function called displayName().
displayName() is an inner function defined inside init() and available only
inside the body of init().

displayName() has no local variables of its own. However, since inner functions
have access to the variables of outer functions, displayName() can access the 
variable name declared in the parent function, init().

This is an example of lexical scoping, which describes how a parser resolves 
variable names when function are nested. The word lexical refers to the fact that 
lexical scoping uses the location where a variable is declared within the source
code to determine where that variable is available. Nested functions have access
to variables declared in their outer scope.
*/
