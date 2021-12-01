const service = require('./service')

const main = async () => {

    console.log('[controller] start')

    service.getName()

    console.log('[controller] end')

}

main()
