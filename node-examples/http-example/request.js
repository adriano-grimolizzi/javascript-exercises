const request = require('request')

const urlCheck = "https://adriano.free.beeceptor.com/check"

request(urlCheck, { json: true }, (error, response) => {
    if (error) { return console.log(error); }
    console.log(JSON.stringify(response));
})