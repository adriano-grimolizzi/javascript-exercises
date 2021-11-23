const utils = require('./retry-utils')
const logger = require('./logger')

const applyRetryLogic = async (callFunction, functionArguments, validityFunction, timeout) => {

    const functionName = utils.getFunctionName(callFunction)

    let response

    const MAX_NUMBER_OF_RETRIES = 3
    let retryCounter = 0

    while (retryCounter <= MAX_NUMBER_OF_RETRIES) {
        response = await callFunction(...functionArguments)
        if (!validityFunction(response)) {

            logger.info(`Error in function ${functionName}, retrying...`, { response })

            retryCounter++

            if (timeout) {
                await helper.sleep(timeout)
            }
        } else {
            if (retryCounter) {
                logger.info(`Function ${functionName} was successful after ${retryCounter} ${retryCounter === 1 ? 'retry' : 'retries'}.`)
            }
            return response
        }
    }
    logger.error(`Exceeded max number of retries (${MAX_NUMBER_OF_RETRIES} retries).`)
}

module.exports = applyRetryLogic
