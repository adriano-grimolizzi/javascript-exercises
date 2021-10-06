const object1 = {
    type: 'greeting'
}

const object2 = {
    type: 'farewell'
}

const printMessage = object => {
    if (object?.type === 'greeting') {
        console.log('Hello!')
    } else if (object?.type === 'farewell') {
        console.log('Goodbye.')
    } else {
        console.log('Dunno...')
    }
}

printMessage(object1)
printMessage(object2)
printMessage()