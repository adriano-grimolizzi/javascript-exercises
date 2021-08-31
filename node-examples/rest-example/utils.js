const isError = (possibleError) => possibleError instanceof Error

const getErrorMessage = (error) => {
    const { status, statusText } = error.response
    return `An error has occurred. Status: ${status} - Text: ${statusText}`
}

const getErrorIfExists = (possibleError) =>
    isError(possibleError) ? getErrorMessage(possibleError) : possibleError

module.exports = {
    getErrorIfExists
}
