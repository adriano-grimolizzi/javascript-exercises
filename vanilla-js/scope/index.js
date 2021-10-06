// every iteration of the for loop has it's own scope, right?

const array = ["banana", "susina", "arancia", "arcobaleno"]

array.forEach((current, index) => {
    const toUppercase = current.toUpperCase()
    console.log(`Index: ${index} - ${toUppercase}`)
})

// YES