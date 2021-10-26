const request = require('supertest')
const express = require("express")

const { endpoints } = require('../utils/constants')
const houseRouter = require('./house-router')

const MOCK_HOUSES = [
    "Gryffindor",
    "Slytherin",
    "HufflePuff",
    "RavenClaw",
]

const app = express()

app.use(endpoints.HOUSES, houseRouter)

describe('House router test:', () => {
    it('should return mock houses', async () => {
        const response = await request(app).get(endpoints.HOUSES)

        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(MOCK_HOUSES)
    })
})
