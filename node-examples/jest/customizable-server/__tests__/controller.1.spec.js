const BoringServer = require('../BoringServer')
jest.mock('../BoringServer')
BoringServer.mockImplementation(() => ({
    getResponse: () => 'Mario (mocked server)'
}))
const controller = require('../controller') // this has to be after the mock!

describe('CustomizableServer test:', () => {
    it('should work with mocking', () => {
        expect(controller.getResponse()).toBe('Mario (mocked server)')
    })
})
