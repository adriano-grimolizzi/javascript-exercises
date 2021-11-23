const logToConsole = message => console.log(message)

const logger = {
    info: logToConsole,
    error: logToConsole
}

module.exports = logger
