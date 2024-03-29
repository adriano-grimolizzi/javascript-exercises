const axios = require('axios')

const service = require('./wizard-service')
const { WIZARDS_URL } = require('../utils/constants')

jest.mock('axios')

describe('wizard service test', () => {
    describe('when API call is successful', () => {
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
    describe('when API call is fails', () => {
        it('should return empty list', async () => {
            // given
            const mockError = new Error('Network Error')
            mockError.response = {
                status: 404,
                statusText: "Not Found"
            }
            axios.get.mockRejectedValueOnce(mockError)

            // when
            const result = await service.getWizards()

            // then
            expect(axios.get).toHaveBeenCalledTimes(2)
            expect(axios.get).toHaveBeenCalledWith(WIZARDS_URL)
            expect(result).toEqual(mockError)
        })
    })
})
