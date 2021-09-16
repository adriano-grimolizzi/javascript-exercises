const axios = require('axios')

const { WIZARDS_URL } = require('./constants')

const getWizards = async () => {
    try {
        const { data } = await axios.get(WIZARDS_URL)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return error
    }
}

module.exports = {
    getWizards,
}
