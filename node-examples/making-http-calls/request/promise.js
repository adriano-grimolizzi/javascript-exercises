const request = require('request')
const { URL } = require('../constants')

const promise = new Promise((resolve, reject) => {
    request(URL, (error, response, body) => {
        if (error) {
            return reject(error)
        } else {
            return resolve(body)
        }
    })

})

const requestPromise = () => new Promise((resolve, reject) => {

})