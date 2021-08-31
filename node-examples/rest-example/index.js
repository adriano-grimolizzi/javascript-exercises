const app = require('express')()

const { getUsers } = require('./service')
const { getErrorMessage } = require('./utils')

const port = 3000

app.get('/', async (_request, response) => {
    const resultOrError = await getUsers()
    resultOrError instanceof Error ? 
        response.send(getErrorMessage(resultOrError)) : 
        response.send(resultOrError)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
