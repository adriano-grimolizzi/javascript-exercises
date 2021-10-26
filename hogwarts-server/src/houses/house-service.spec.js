const HouseService = require('./house-service')

const MOCK_HOUSES = [
    'Grifondoro',
    'Serpeverde',
]    

const mockHouseRepository = {
    getHouses: () => MOCK_HOUSES
}

const houseService = new HouseService(mockHouseRepository)

describe('House Repository', () => {
    it('should getHouse', () => {
        expect(houseService.getHouses()).toStrictEqual(MOCK_HOUSES)
    })
})
