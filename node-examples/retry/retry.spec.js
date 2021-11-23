const ServerThatWorksOnTheSecondTry = require("./test/ServerThatWorksOnTheSecondTry")

const applyRetryLogic = require('./retry')
const logger = require("./logger")

describe('retry test: ', () => {
    it('should do something', async () => {

        const server = new ServerThatWorksOnTheSecondTry()

        const logSpy = jest.spyOn(logger, 'info')

        const result = await applyRetryLogic(
            server.getName.bind(server),
            ['pretty', 'please'],
            response => response)

        expect(result).toBe('Germano')
        expect(logSpy).toHaveBeenCalledTimes(2)
        expect(logSpy).toHaveBeenCalledWith('Function getName was successful after 1 retry.')
    })

    it('should return a message if exceedes the max number of retries', async () => {
        const server = {
            returnUndefined: () => { }
        }
        const logSpy = jest.spyOn(logger, 'error')

        const result = await applyRetryLogic(
            server.returnUndefined.bind(server),
            [],
            response => response)

        expect(logSpy).toHaveBeenCalledWith('Exceeded max number of retries (3 retries).')
    })
})
