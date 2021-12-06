const request = require('request')
const { URL } = require('../../constants')

request(URL, (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response?.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
})
