const service = require('./service')

jest.mock('./constants', () => ({ PI: 64 }))

it('something', () => {
    expect(service.getPi()).toEqual(64)
})
