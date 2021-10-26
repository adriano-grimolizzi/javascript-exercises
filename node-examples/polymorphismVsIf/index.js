const MessageFactory = require("./MessageFactory")

const rawMessages = [
    {
        type: 'START',
        text: 'Hello!'
    },
    {
        type: 'END',
        text: 'GoodBye!'
    },
    {
        type: 'MIDDLE',
        text: 'Pleasure to meet you!'
    },
    {
        type: 'MIDDLE',
        text: 'Nice to see you!'
    },
]

const messageFactory = new MessageFactory()

const printMessage = message => console.log(message.getText())

rawMessages
    .map(rawMessage => messageFactory.getMessageObject(rawMessage))
    .forEach(printMessage)