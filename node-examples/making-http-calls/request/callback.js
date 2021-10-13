const request = require('request')
const { URL } = require('../constants')

request.get(URL, (error, response, body) => {
    console.error(`Error: ${error}`)
    console.log(`Status Code: ${response?.statusCode}`)
    console.log(`Body: ${body}`)
})