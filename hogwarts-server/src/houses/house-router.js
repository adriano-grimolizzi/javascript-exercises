const express = require('express')
const logger = require('@agrimolizzi/logger')()

const { endpoints } = require('../utils/constants')

const HouseService = require('./house-service')
const houseRepository = require('./house-repository')

const houseService = new HouseService(houseRepository)

const router = express.Router()

router.get('/', (_, response) => {
    logger.info(`Received a request on path: ${endpoints.HOUSES}.`)
    const houses = houseService.getHouses()
    response.status(200).send(houses)
})

module.exports = router
