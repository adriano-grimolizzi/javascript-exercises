const counter = (() => {
    let privateCounter = 0

    function changeBy(val) {
        privateCounter += val
    }

    return {
        increment: () => {
            changeBy(1)
        },
        value: () => {
            return privateCounter
        }
    }
})()

console.log(counter.value())

counter.increment()

console.log(counter.value())
