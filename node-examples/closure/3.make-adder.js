const makeAdder = x => y => x + y

const add5 = makeAdder(5)
const add6 = makeAdder(6)

console.log(add5(5))
console.log(add6(6))

/*
makeAdder(x) is a function that takes a single argument and returns a new
function. The function it returns takes a single argument y, and returns the
sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add
a specific value to their argument.

add5 and add6 are both closures. They share the same function body definition,
but store different lexical environments. In add5's lexical environment, x is
5, while in add6's, x is 6.

PRATICAL CLOSURES
Closures are useful becaus they let you associate data (the lexical 
environment), with a function that operates on that data. This parallels to
object-oriented programming, where objects allow you to associate data (the
object's properties) with one or more methods.

You can use a closure anywhere that you might normally use an objec with only a 
single method.
*/