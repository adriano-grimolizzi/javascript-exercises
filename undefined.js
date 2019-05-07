let nonDef;
console.log(nonDef);          // undefined
console.log(typeof(nondef));  // undefined

let nulla = null;
console.log(nulla);           // null
console.log(typeof(nulla));   // object

// undefined means a variable that has been declared but has not yet been assigned a value.
// unassigned variables are initialized by JS with a default value of undefined.

// null is an assignment value. It can be assigned to a var as a representation of no value.
// JS never sets a value to null.

// undefined and null are two distinct types: 
// undefined is a type itself, while null is an object.

console.log(nulla == nonDef); // true 
console.log(nulla === nonDef); // false 

