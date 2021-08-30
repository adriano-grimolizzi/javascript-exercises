const asyncFunction = () => setTimeout(() => {
    console.log('2')
}, 1000)

console.log(1)

asyncFunction()

console.log(3)