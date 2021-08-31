const app = require('express')()

const { getUsers } = require('./service')
const { getErrorIfExists } = require('./utils')

const port = 3000

app.get('/', async (_request, response) =>
    response.send(getErrorIfExists(await getUsers())))

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`))
