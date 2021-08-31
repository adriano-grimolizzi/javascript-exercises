const app = require('express')()

const { getUsers } = require('./service')

const port = 3000

app.get('/', async (_req, res) => {
    const data = await getUsers()    
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
