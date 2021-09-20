const request = require('supertest');
const express = require("express");

const { endpoints } = require('../utils/constants')
const wizardRouter = require('./wizard-router')
const wizardService = require('./wizard-service')

jest.mock('./wizard-service')

const app = express();

app.use(endpoints.WIZARDS, wizardRouter)

describe("app test", () => {
  describe('when service call is successful', () => {
    test("should return wizards if the service resolves successfully", async () => {
      // given
      const mockResponse = [
        { name: 'Hannah Abbot', house: 'Hufflepuff' },
        { name: 'Ronald Weasley', house: 'Gryffindor' },
        { name: 'Pansy Parkinson', house: 'Slytheryn' }
      ]
      wizardService.getWizards.mockResolvedValueOnce(mockResponse)
      // when
      const response = await request(app).get(endpoints.WIZARDS)
      // then
      expect(wizardService.getWizards).toHaveBeenCalledTimes(1)
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual(mockResponse)
    })
  })
  describe('when service call is unsuccessful', () => {
    test("should return 500 if the service rejects with an error", async () => {
      // given
      const mockError = new Error('Network Error')
      mockError.response = {
        status: 404,
        statusText: "Not Found"
      }
      wizardService.getWizards.mockResolvedValueOnce(mockError)
      // when
      const response = await request(app).get(endpoints.WIZARDS)
      // then
      expect(wizardService.getWizards).toHaveBeenCalledTimes(2)
      expect(response.statusCode).toBe(500)
      expect(response.text).toBe('500 - Internal Server Error')
    })
  })
})
