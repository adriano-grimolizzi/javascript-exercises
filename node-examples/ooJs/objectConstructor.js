let person1 = new Object()

person1.name = 'Chris'
person1.greeting = function () {
    console.log(`Hi!, my name is ${this.name}.`)
}

person1.greeting()