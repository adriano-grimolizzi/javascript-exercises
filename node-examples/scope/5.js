const { log } = require('./utils')

let x = { color: "blue" }

let y = x

{
    let x = 5
    console.log(x)
    console.log(y.color) // blue

    y.color = "red"
}
console.log(y.color) // red - object modified in inner scope
console.log(x.color) // red - x and y point to the same object
