const express = require('express')
const logger = require('@agrimolizzi/logger')()

const service = require('./wizard-service')
const { isError } = require('../utils/utils')

const router = express.Router()

router.get('/', async (_, response) => {
    logger.info("Received a request on path: '/wizards'")
    const wizards = await service.getWizards()
    isError(wizards) ?
        response.status(500).send('500 - Internal Server Error') :
        response.status(200).send(wizards)
})

module.exports = router
