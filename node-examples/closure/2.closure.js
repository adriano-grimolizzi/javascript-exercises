const makeFunction = () => {
    const name = 'Mozilla'
    const displayName = () => {
        console.log(name)
    }
    return displayName
}

const myFunction = makeFunction()
myFunction() // Mozilla

/*
Running the code has exactly the same effect as the previous example of the 
init() function in 1.lexical-scoping.js.
The difference is that the displayName() inner function is returnd from the
outer function before being executed.
At first glance, it does seem unintuitive that the code still works. In
some programming languages, the local variables within a function exist for
just the duration of that function execution. Once makeFunc() finishes 
executing, you might expect that the name variable would no longer be 
accessible.
The reason it works is that in JS, functions form closures. A closure is the
combination of a function and the lexical environment within which that 
function was declared. This environment consists of any local variable that 
was in-scope at the time the closure was created. In this case, myFunction is
a refence o th instance of the function displayNmae() that is created when 
makeFunc() is run. The instance of diplayName() maintains a reference to its 
lexical environment, whithin which the variable name exists. For this reason, 
when myFunc is invoked, the variable name remains available for use.
*/