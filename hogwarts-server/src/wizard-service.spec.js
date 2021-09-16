const axios = require('axios')

const service = require('./wizard-service')
const { WIZARDS_URL } = require('./constants')

jest.mock('axios')

describe('wizard service test', () => {

    it('should return wizard list', async () => {
        // given
        const mockResponse = {
            data: [
                { name: 'Harry Potter', house: 'Gryffindor' },
                { name: 'Ronald Weasley', house: 'Gryffindor' },
                { name: 'Hermione Granger', house: 'Gryffindor' }
            ]
        }
        axios.get.mockResolvedValueOnce(mockResponse)

        // when
        const result = await service.getWizards()

        // then
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(WIZARDS_URL)
        expect(result).toEqual(mockResponse.data)
    })
})
