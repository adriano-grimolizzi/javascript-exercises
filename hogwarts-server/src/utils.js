const isError = possibleError => possibleError instanceof Error

const getErrorMessage = error => {
    const { status, statusText } = error.response
    return `An error has occurred: ${status} ${statusText}`
}

module.exports = {
    isError,
    getErrorMessage
}
