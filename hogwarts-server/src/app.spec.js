const request = require('supertest')

const app = require('./app');
const { endpoints } = require('./utils/constants');

describe("app test", () => {
    test("should respond to the GET method", async () => {
        const response = await request(app).get(endpoints.HEALTH)

        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('Ok')
    })
})
