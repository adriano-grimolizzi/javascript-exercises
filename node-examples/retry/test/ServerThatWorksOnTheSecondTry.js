class ServerThatWorksOnTheSecondTry {
    constructor() {
        this.works = false
    }
    getName(argument1, argument2) {
        if (argument1 !== 'pretty' && argument2 !== 'please') return
        if (this.works) return 'Germano'
        else this.works = true
    }
}

module.exports = ServerThatWorksOnTheSecondTry
