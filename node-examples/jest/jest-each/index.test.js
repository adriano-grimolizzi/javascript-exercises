const { getFirstName } = require('./index')

describe('getFirstName test', () => {
    test.each`
        expected     | input
        ${undefined} | ${undefined}
        ${undefined} | ${{ info: undefined }}
        ${undefined} | ${{ info: { firstName: undefined } }}
        ${"Gregory"} | ${{ info: { firstName: "Gregory" } }}
    `('returns $expected when input is $input', ({ expected, input }) => {
        expect(getFirstName(input)).toBe(expected);
    })
})
