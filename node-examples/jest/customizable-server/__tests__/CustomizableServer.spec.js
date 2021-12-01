const CustomizableServer = require('../CustomizableServer')

describe('CustomizableServer test:', () => {
    it('should work', () => {
        const responseArray = [
            {
                statusCode: 404
            }, {
                statusCode: 200
            }
        ]
        const customizableServer = new CustomizableServer(responseArray)

        expect(customizableServer.getResponse().statusCode).toBe(200)
        expect(customizableServer.getResponse().statusCode).toBe(404)
        expect(customizableServer.getResponse()).toBe(undefined)
    })
})
