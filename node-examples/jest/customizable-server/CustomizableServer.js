class CustomizableServer {
    constructor(responseArray) {
        this.responseArray = responseArray
    }
    getResponse() {
        return this.responseArray.pop()
    }    
}

module.exports = CustomizableServer
