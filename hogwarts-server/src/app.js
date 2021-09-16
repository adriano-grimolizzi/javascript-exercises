const express = require('express')

const wizardRouter = require('./wizard-router')

const app = express()
const PORT = 3000

app.get('/health', (_, response) => {
    response.status(200).send('Ok')
})

app.use('/wizards', wizardRouter)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
