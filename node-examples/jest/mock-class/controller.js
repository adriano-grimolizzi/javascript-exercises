const Service = require('./Service')

const service = new Service()

const getName = id => service.getName(id)

module.exports = {
    getName
}
