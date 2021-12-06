const BoringServer = require('../BoringServer')
jest.mock('../BoringServer')

class CustomizableServer {
    getResponse = () => 'Mario (mocked function)'
}

BoringServer.mockImplementation(new CustomizableServer())
const controller = require('../controller') // this has to be after the mock!

describe('CustomizableServer test:', () => {
    it('should work with mocking', () => {
        expect(controller.getResponse()).toBe('Mario (mocked function)')
    })
})
