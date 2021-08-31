const axios = require('axios')

const { getErrorMessage } = require('./utils')

const URL = "https://jsonplaceholder.typicode.com/users"

const getUsers = async () => {
    try {
        const { data } = await axios.get(URL)
        console.log(data)
        return data
    } catch (error) {
        console.error(getErrorMessage(error))
        return error
    }
}

module.exports.getUsers = getUsers