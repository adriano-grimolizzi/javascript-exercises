const controller = require('./controller')

jest.mock('./Service', () =>
    jest.fn().mockImplementation(() => ({ 
        getName: id => {
            if (id === 1) return 'Mario'
            return 'Mosconi' 
        }
    }))
)

describe('controller test:', () => {

    it('should get name', () => {
        expect(controller.getName(1)).toBe('Mario')
        expect(controller.getName(2)).toBe('Mosconi')
    })
})
