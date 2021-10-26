const { StartMessage, MiddleMessage, EndMessage } = require('./Message')

class MessageFactory {
    getMessagesFromRawArray(rawArray) {
        return rawArray.map(this.getMessageObject)
    }
    getMessageObject(rawMessage) {
        switch (rawMessage.type) {
            case 'END':
                return new EndMessage(rawMessage.text)
            case 'MIDDLE':
                return new MiddleMessage(rawMessage.text)
            case 'START':
                return new StartMessage(rawMessage.text)
        }
    }
}

module.exports = MessageFactory
