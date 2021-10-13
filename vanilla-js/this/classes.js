class House {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name)
    }
    sayHello = () => console.log(this.name)
}

const house1 = new House('Gregory')

house1.greet() // Gregory

house1.sayHello() // Gregory