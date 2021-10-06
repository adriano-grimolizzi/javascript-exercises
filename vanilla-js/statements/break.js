// The BREAK statement terminates the current 
// loop, switch, or label statement and transfers
// program control to he statement following the
// terminated statement.

let i = 0

while (i < 6) {
    if (i === 3) {
        break
    }
    i += 1
}

console.log(i) // 3
