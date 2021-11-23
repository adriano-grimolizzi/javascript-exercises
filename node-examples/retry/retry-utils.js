// Gets the function name, removing the 'bound' keyword when we pass the 
// function with bind
const getFunctionName = func => {
    const words = func.name.split(' ')
    return words[words.length - 1]
}

module.exports = {
    getFunctionName
}
