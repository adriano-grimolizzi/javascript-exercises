const https = require('https')

const { URL } = require('../constants')

const wrapperFunction = url => new Promise((resolve, reject) => {
    https.get(url, response => {
        let data = ''

        response.on('data', chunk => {
            data += chunk
        })

        response.on('end', () => {
            resolve(data)
        })
    })
})

wrapperFunction(URL).then(data => console.log(data))