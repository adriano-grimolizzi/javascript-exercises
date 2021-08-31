const axios = require('axios')

const URL = "https://jsonplaceholder.typicode.com/users"

const getUsers = async () => {
    const {data} = await axios.get(URL)
    console.log(data)    
    return data
}

module.exports.getUsers = getUsers
