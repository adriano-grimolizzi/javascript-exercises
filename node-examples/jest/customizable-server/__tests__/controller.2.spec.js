const BoringServer = require('../BoringServer')
jest.mock('../BoringServer')

function CustomizableServer() {
    this.getResponse = () => 'Mario (mocked function)'
}

BoringServer.mockImplementation(CustomizableServer)
const controller = require('../controller') // this has to be after the mock!

describe('CustomizableServer test:', () => {
    it('should work with mocking', () => {
        expect(controller.getResponse()).toBe('Mario (mocked function)')
    })
})
