const request = require('request')
const { URL } = require('../../constants')

const getBody = (url) => {
    const options = {
        method: 'GET',
        url,
    }
    return new Promise((resolve, reject) => {
        request.get(options, (error, response, body) => {
            if (error) {
                reject(error)
            } else {
                resolve(body)
            }
        })
    })
}

const main = async () => {
    const body = await getBody(URL)
    console.log(body)
}

main()
