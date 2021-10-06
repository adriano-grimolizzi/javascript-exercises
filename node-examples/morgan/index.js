const express = require('express')
const morgan = require('morgan')

const endpoints = require('./endpoints')

const app = express()

const skip = request => request.url === endpoints.HEALTH

app.use(morgan('combined', { skip }))

const PORT = 3000

app.get(endpoints.HEALTH, (_, response) => response.end('OK!'))

app.get('/', (_, response) => response.end('Hello!'))

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`))