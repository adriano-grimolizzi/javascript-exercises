const slowServer = require('./slow-server')

const getName = async () => {

    console.log('[service] start')

    const name = await slowServer.getName()

    console.log(name)

    console.log('[service] end')
}

module.exports = {
    getName
}
