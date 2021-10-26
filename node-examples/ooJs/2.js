// A constructor function starts with a capital letter - convention 
// to make constructor easier to recognize in the code.
function Person(name) {
    this.name = name
    this.greeting = function() {
        console.log(`Hi!, my name is ${this.name}.`)
    }
}

const salva = new Person('Salva')
salva.greeting()