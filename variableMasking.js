{
    let x = 'ciao';
    {
        let x = 2;
        console.log(x); // 2
    }
    console.log(x); // ciao
}
console.log(typeof x); // undefined - x is out of scope

// in the inner block, x is a distinct variable from the outer block.
