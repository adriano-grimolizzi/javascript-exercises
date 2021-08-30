const request = require('request')

const urlCheck = "https://adriano.free.beeceptor.com/check"

// request(urlCheck, { json: true }, (error, response) => {
//     if (error) { return console.log(error); }
//     console.log(JSON.stringify(response));
// })

const getSwitchServerUrl = response => response?.body?.messages?.find((currentMessage) => currentMessage.type == "SwitchServer")?.message?.newUrl;

const getResponse = () => new Promise((resolve, reject) => {
    request(urlCheck, (error, _response, body) => {
        if (error) { return reject(error) }
        try {
            resolve(JSON.parse(body));
        } catch (e) {
            reject(e);
        }
    })
})

const printResponse = async () => {
    const body = await getResponse()

    const response = { body }

    const url = getSwitchServerUrl(response)
    console.log(JSON.stringify(response))
    console.log(url)
}

printResponse()

