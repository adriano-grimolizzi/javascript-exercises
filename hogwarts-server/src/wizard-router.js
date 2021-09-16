const express = require('express')

const service = require('./wizard-service')

const router = express.Router()

router.get('/', async (_, response) => {
    const wizards = await service.getWizards()
    response.status(200).send(wizards)
})

module.exports = router
