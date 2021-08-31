const countdown = () => {
    let i
    console.log('Countdown:')
    for (i=5; i>=0; i--) {
        setTimeout(() => {
            console.log(i===0 ? "GO" : i)
        }, (5 - i) * 1000)
    }
}

countdown()

// The "i" variable is declared OUTSIDE of the for loop:
// the for loop executes completely, leavine i with the value -1,
// and only then do the callbacks start executing.

// The problem is, when they execute, i already has the value -1.

// When we invoke countdown, we're creating a closure that contains
// the variable i. All of the (anonymous) callbacks that we create
// in the for loop have access to the same i.

// Inside the for loop, we see i usd in 2 different ways:
// 1) to calculate the timeout:
//    it works as intended because the calculation is sync
//    the call to setTimeout is also sync
//    the async part is the function that's passed to setTimeout,
//    and that's where the problem occurs.