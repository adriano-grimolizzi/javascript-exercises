const houseRepository = require('./house-repository')

HOUSES = [
    'Gryffindor',
    'Slytherin',
    'HufflePuff',
    'RavenClaw'
]

describe('House Repository', () => {
    it('should getHouse', () => {
        expect(houseRepository.getHouses()).toStrictEqual(HOUSES)
    })
})