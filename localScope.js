var a = 1;

function two(a) {
    console.log(a);
}

function three() {
    let a = 3;
    console.log(a);
}

console.log(a); // 1

two(2); // 2

three(); // 3

console.log(a) // still 3