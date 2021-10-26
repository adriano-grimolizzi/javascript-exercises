class Message {
    constructor(text) {
        this.text = text
    }
}

class StartMessage extends Message {
    getText() {
        return `I am a start message. Text: ${this.text}`
    }
}

class MiddleMessage extends Message {
    getText() {
        return `I am a middle message. Text: ${this.text}`
    }
}

class EndMessage extends Message {
    getText() {
        return `I am an end message. Text: ${this.text}`
    }
}

module.exports = {
    StartMessage,
    MiddleMessage,
    EndMessage
}
