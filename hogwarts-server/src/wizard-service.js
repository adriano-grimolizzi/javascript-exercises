const axios = require('axios')

const URL = 'https://adriano.free.beeceptor.com/wizards'

const getWizards = async () => {
    const { data } = await axios.get(URL)
    console.log(data)
    return data
}

module.exports = {
    getWizards,
}
