// Arguments of a function exists only in the body of the function

const f = x => x + 3

f(5)

x // ReferenceError: x is not defined

// x doesn't exists outside of the body of the function
// The scope of x is the function f

// DECLARING vs DEFINITION of a variable
// DECLARING means that you are announcing its existence by giving it
// an identifier.
// DEFINING a variable means declaring it and giving it a value
// In JS the 2 terms are interchangeable, as all variables are given
// a value when they are declared (they implicitly get th value 
// undefined).
