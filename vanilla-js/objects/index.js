const messages = {
    pleaseCallSupport: 'pleaseCallSupport',
    noAvailableAgents: 'noAvailableAgents',
    normalFunction: function() {
        return this.pleaseCallSupport
    },
    arrowFunction: () => this.pleaseCallSupport
}

console.log(messages.normalFunction()) // OK
console.log(messages.arrowFunction()) // undefined