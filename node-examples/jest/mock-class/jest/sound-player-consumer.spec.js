const SoundPlayer = require('./sound-player')
const SoundPlayerConsumer = require('./sound-player-consumer')

jest.mock('./sound-player', () => jest.fn())

describe('SoundPlayer test:', () => {
    
    beforeAll(() => {
        SoundPlayer.mockImplementation(() => ({
            playSoundFile: () => 'John Mayer'
        }))
    })
    
    it('Should get a string when calling playSomethingCool', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer()
        expect(soundPlayerConsumer.playSomethingCool()).toEqual('John Mayer')
    })
})
