const express = require('express')

const service = require('./wizard-service')
const { isError } = require('./utils')

const router = express.Router()

router.get('/', async (_, response) => {
    const wizards = await service.getWizards()
    isError(wizards) ?
        response.status(500).send('Internal Server Error') :
        response.status(200).send(wizards)
})

module.exports = router
