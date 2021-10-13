const express = require('express')
const logger = require('@agrimolizzi/logger')()

const HouseService = require('./houses/house-service')
const houseRepository = require('./houses/house-repository')
const { endpoints } = require('./utils/constants')
const wizardRouter = require('./wizards/wizard-router')

const app = express()

const houseService = new HouseService(houseRepository)

app.get(endpoints.HOUSES, (_, response) => {
    const houses = houseService.getHouses()
    response.status(200).send(houses)
})

app.get(endpoints.HEALTH, (_, response) => {
    response.status(200).send('Ok')
})

app.use(endpoints.WIZARDS, wizardRouter)

app.get(endpoints.MISSING_ROUTE, (request, response) => {
    const url = request.originalUrl
    const internalErrorMsg = `A request was made to the non-existing URL: '${url}'.`
    const externalErrorMsg = `The requested URL '${url}' was not found on this server.`
    logger.warn(internalErrorMsg)
    response.status(404).send(externalErrorMsg)
})

module.exports = app
