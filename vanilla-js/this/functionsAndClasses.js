const object1 = {
    name: 'Pippo',
    speak() {
        console.log(`My name is ${this.name}.`)
    },
    speakArrow: () => {
        console.log(`My name is ${this.name}.`)
    }
}

object1.speak() // Pippo
object1.speakArrow() // undefined

class Person{
    constructor() {
        this.name = 'Pluto'
    }
    speak() {
        console.log(`My name is ${this.name}.`)
    }
    speakArrow = () => {
        console.log(`My name is ${this.name}.`)
    }
}

const personInstance1 = new Person()

personInstance1.speak() // Pluto
personInstance1.speakArrow() // Pluto