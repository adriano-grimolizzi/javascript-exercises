const controller = require('../controller')

describe('CustomizableServer test:', () => {
    it('should work without mocking', () => {
        expect(controller.getResponse()).toBe('Mosconi')
        expect(controller.getResponse()).toBe('Mosconi')
    })
})
