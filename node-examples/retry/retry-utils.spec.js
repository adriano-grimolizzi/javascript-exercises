const utils = require('./retry-utils')

describe('retry utils test:', () => {
    it('getFunctionName test:', () => {
        const getRegion = () => {}
        expect(utils.getFunctionName(getRegion.bind(this))).toEqual('getRegion')
        expect(utils.getFunctionName(getRegion)).toEqual('getRegion')
    })
})
