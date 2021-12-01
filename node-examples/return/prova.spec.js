const returnFalse = () => false

const shouldReturnFalse = () => {
    console.log('returning false')
    return returnFalse()
}

console.log(shouldReturnFalse())