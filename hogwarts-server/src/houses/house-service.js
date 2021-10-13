class HouseService {
    constructor(houseRepository) {
        this.houseRepository = houseRepository
    }

    getHouses = () => this.houseRepository.getHouses()
}

module.exports = HouseService
