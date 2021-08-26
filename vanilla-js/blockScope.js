// let and const declare identifiers in the block scope.

{ // standalone blocks: convenient for understanding how scope works.
    const x = 1;
}

console.log(`x = ${x}`); // ReferenceError: x is not defined


// var variables are function scope. they are only available inside the function they're created in, 
// or if not created inside a function, they are globally scoped.

var a = 1;

function four() {
    if (true) {
        var a = 11;
    }
    console.log(a); // 11
}

console.log(a); // 1

four();

console.log(a); // 1

console.log("---");

var b = 1;

function five() {
    if (true) {
        let b = 4; // let and const are scoped to the block (a set of opening and closing curly brackets).
    }
    console.log(b); // 1
}

console.log(b); // 1

five();
