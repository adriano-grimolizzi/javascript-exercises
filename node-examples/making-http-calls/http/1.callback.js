const https = require('https')

const { URL } = require('../constants')

https.get(URL, response => {
    let data = ''

    response.on('data', chunk => {
        data += chunk
    })

    response.on('end', () => {
        console.log(data)
    })
})
