const express = require('express')
const logger = require('@agrimolizzi/logger')()

const { isError } = require('../utils/utils')
const { endpoints } = require('../utils/constants')

const service = require('./wizard-service')

const router = express.Router()

router.get('/', async (_, response) => {
    logger.info(`Received a request on path: ${endpoints.WIZARDS}.`)
    const wizards = await service.getWizards()
    isError(wizards) ?
        response.status(500).send('500 - Internal Server Error') :
        response.status(200).send(wizards)
})

module.exports = router
