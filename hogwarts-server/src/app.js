const express = require('express')

const service = require('./wizard-service')

const app = express()
const PORT = 3000

app.get('/health', (_, response) => {
    response.status(200).send('Ok')
})

app.get('/wizards', async (_, response) => {
    const wizards = await service.getWizards()
    response.status(200).send(wizards)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
