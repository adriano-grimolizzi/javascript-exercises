const getErrorMessage = (error) => {
    const { status, statusText } = error.response    
    return `An error has occurred. Status: ${status} - Text: ${statusText}`
}

module.exports = {
    getErrorMessage
}