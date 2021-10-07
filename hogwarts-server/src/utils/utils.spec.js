const utils = require('./utils')

describe('utils test:', () => {
    describe('getErrorMessage test:', () => {
        it('should return error message', () => {
            // given
            const error = {
                response: {
                    status: 404,
                    statusText: 'not found'
                }
            }
            // when
            const result = utils.getErrorMessage(error)
            // then
            expect(result).toBe('An error has occurred: 404 - not found')
        })
    })
    describe('isError test:', () => {
        test.each`
                expected | input
                ${false} | ${undefined}
                ${false} | ${{}}
                ${true}  | ${new Error()}
            `('return $expected when input is $input', ({ expected, input }) => {
            expect(utils.isError(input)).toBe(expected);
        })
    })
})
