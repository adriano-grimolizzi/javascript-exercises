const express = require('express')()

const PORT = 3001

const timeout = () => new Promise(resolve => setTimeout(resolve, 2 * 1000))

express.get('/', async (_request, response) => {
    console.log('wait...')
    await timeout()
    console.log('send response')
    return response.status(200).send('Hello!')
})

express.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
