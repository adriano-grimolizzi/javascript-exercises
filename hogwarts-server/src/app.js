const express = require('express')
const logger = require('@agrimolizzi/logger')()

const wizardRouter = require('./wizards/wizard-router')

const app = express()
const PORT = 3000

app.get('/health', (_, response) => {
    response.status(200).send('Ok')
})

app.use('/wizards', wizardRouter)

app.listen(PORT, () => {
    logger.info(`Example app listening at http://localhost:${PORT}`)
})
