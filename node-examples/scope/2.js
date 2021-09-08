// LEXICAL SCOPE

const x = 3

const f = () => {
    console.log(x)
    console.log(y)
}

{
    const y = 5
    f() // ReferenceError: y is not defined
}

// Means that in order for a variable to be in the scope of the 
// function it must be there when you DEFINE it (as opposed of
// when you CALL it.