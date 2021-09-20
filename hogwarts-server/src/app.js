const express = require('express')

const { endpoints } = require('./utils/constants')
const wizardRouter = require('./wizards/wizard-router')

const app = express()

app.get(endpoints.HEALTH, (_, response) => {
    response.status(200).send('Ok')
})

app.use(endpoints.WIZARDS, wizardRouter)

module.exports = app
