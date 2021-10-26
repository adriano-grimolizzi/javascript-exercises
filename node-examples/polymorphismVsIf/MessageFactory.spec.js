const { StartMessage, MiddleMessage, EndMessage } = require('./Message')
const MessageFactory = require('./MessageFactory')

describe('MessageFactory test: ', () => {

    let factory

    beforeEach(() => {
        factory = new MessageFactory()
    })

    it('should convert message', () => {
        const input = {
            type: 'START',
            text: 'Hello!'
        }
        const output = factory.getMessageObject(input)

        expect(output).toBeInstanceOf(StartMessage)
        expect(output.getText()).toEqual('I am a start message. Text: Hello!')
    })
    it('should convert array message', () => {
        const input = [
            {
                type: 'START',
                text: 'Hello!'
            }, {
                type: 'END',
                text: 'GoodBye!'
            }, {
                type: 'MIDDLE',
                text: 'Pleasure to meet you!'
            }, {
                type: 'MIDDLE',
                text: 'Nice to see you!'
            },
        ]

        const output = factory.getMessagesFromRawArray(input)

        expect(JSON.stringify(output)).toEqual('[{"text":"Hello!"},{"text":"GoodBye!"},{"text":"Pleasure to meet you!"},{"text":"Nice to see you!"}]')
        expect(output[0]).toBeInstanceOf(StartMessage)
        expect(output[1]).toBeInstanceOf(EndMessage)
        expect(output[2]).toBeInstanceOf(MiddleMessage)
        expect(output[3]).toBeInstanceOf(MiddleMessage)
    })
})
