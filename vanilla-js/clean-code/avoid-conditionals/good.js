class Message {
    print() {
        console.log('Dunno...')
    }
}

class Greeting extends Message {
    print() {
        console.log('Hello!')
    }
}

class Farewell extends Message {
    print() {
        console.log('Goodbye.')
    }
}

const messages = [
    new Greeting(),
    new Farewell(),
    new Message(),
]

messages.forEach(message => message.print())

