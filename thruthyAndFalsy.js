// A value is "thruthy" when that value coerces to true when evaluated in a boolean context.

if ("Ciao!") { // A non empty string is a thruthy...
    console.log("Ciao!");
}

if (0) { // .......while the integer zero is a falsy.
    console.log("Noone will hear me...");
}

// Thruthy examples: true, {}, []...

// Falsy examples: false, null, undefined, NaN, 0, "".