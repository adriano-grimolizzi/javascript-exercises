const getName = async () => {
    await sleep(1)
    return 'Magnotta'
}

const sleep = async s => {
    await new Promise((resolve) => setTimeout(resolve, s * 1000))
}

module.exports = {
    getName
}