let name1 = 'adriano';

let name2 = 'adriano';

console.log(name1 == name2);

console.log(name1 === name2);

let v1 = 1;

let v2 = "1";

console.log(v1 == v2); //true

console.log(v1 === v2); //false

// ==  Abstract Equality Comparison
// === Strict Equality Comparison

// == will perform a type conversion when comparing two things.
// === will do the same thing but without the type conversion; if the types differ, 
// false is returned.

// Further readings:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness