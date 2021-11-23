const server = {
    works: false,
    getName(argument1, argument2) {
        if (argument1 !== 'pretty' && argument2 !== 'please') return
        if (this.works) return "Germano"
        else this.works = true
    }
}

const retry = (callFunction, arguments, validityCondition) => {

    let response
    let counter = 3
    while (counter > 0) {
        console.log(`Counter: ${counter}`)
        response = callFunction(...arguments)
        if (!validityCondition(response)) {
            console.error(`Error in function ${callFunction.name}, retrying...`)
            counter--
        } else {
            return response
        }
    }    
}

const result = retry(server.getName, ['pretty', 'please'], response => response)

console.log(result)

// console.log(server.getName('please'))
// console.log(server.getName('please'))
// console.log(server.getName())

