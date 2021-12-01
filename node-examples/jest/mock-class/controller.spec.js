const Service = require('./Service')
jest.mock('./Service', () => jest.fn())

Service.mockImplementation(() => ({
    getName: id => {
        if (id === 1) return 'Mario'
        return 'Mosconi'
    }
}))

const controller = require('./controller')

describe('controller test:', () => {
    it('should get name', () => {
        expect(controller.getName(1)).toBe('Mario')
        expect(controller.getName(2)).toBe('Mosconi')
    })
})
