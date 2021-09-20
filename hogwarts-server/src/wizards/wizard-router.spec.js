const request = require('supertest');
const express = require("express");

const { endpoints } = require('../utils/constants')
const wizardRouter = require('./wizard-router')
const wizardService = require('./wizard-service')

jest.mock('./wizard-service')

const app = express();

app.use(endpoints.WIZARDS, wizardRouter)

describe("app test", () => {
  test("should respond to the GET method", async () => {
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
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(mockResponse)
  })
})
