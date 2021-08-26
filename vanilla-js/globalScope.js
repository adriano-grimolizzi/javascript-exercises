// Scope is hierarchical, at the base of the tree is the scope that you're implicitly in when you start a program, the Global Scope.
// When a JS program starts, before any function is called, it is executing in global scope.
// Anything you declare in global scope will be available to all scopes of the program.

var a = 1;

function one() { // This function is dependant on global scope.
    console.log(a);
}

one(); // 1
