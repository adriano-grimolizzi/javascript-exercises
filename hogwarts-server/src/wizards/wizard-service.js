const axios = require('axios')
const logger = require('@agrimolizzi/logger')()

const { WIZARDS_URL } = require('../utils/constants')
const { getErrorMessage } = require('../utils/utils')

const getWizards = async () => {
    try {
        const { data } = await axios.get(WIZARDS_URL)
        logger.info(data)
        return data
    } catch (error) {
        logger.error(getErrorMessage(error))
        return error
    }
}

module.exports = {
    getWizards,
}
