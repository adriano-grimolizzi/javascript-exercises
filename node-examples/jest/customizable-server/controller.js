const BoringServer = require('./BoringServer')

const server = new BoringServer()

const getResponse = () => server.getResponse()

module.exports = {
    getResponse
}
