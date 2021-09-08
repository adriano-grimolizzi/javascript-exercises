// The 'this' keyword
// Inside a function body, a special read-only value called 'this' is available.
// Normally, the this keyword is used in object methods.
// When methods are called, the this keyword taks on the value of the specific
// object it was called on.

test("...", () => {
    const o3 = {
        name: 'Al',
        speak: function () { return `My name is ${this?.name}.` } // I added the ? to this in order to make it work in jest
    }

    // when we call o.speak() the this keyword is bound to o:

    expect(o3.speak()).toBe("My name is Al.")

    // THIS IS BOUND ACCORDING ON HOW THE FUNCTION IS CALLED, not where the function 
    // is declared.

    const speak = o3.speak
    expect(speak === o3.speak).toBe(true)
    expect(speak()).toBe('My name is undefined.')
})

test("this doesn't work in method's nested functions...", () => {

    const o = {
        name: 'Julie',
        greetBackwards() {
            function getReverseName() {
                let nameBackwards = '';
                for (let i = this.name.length - 1; i >= 0; i--) {
                    nameBackwards += this.name[i]
                }
                return nameBackwards
            }
            return `.${getReverseName()} omaihc im ,oaiC`
        }
    }

    expect(() => { o.greetBackwards() }).toThrow(TypeError)
})

test("...but we can assign a second variable to this", () => {

    const o = {
        name: 'Julie',
        greetBackwards() {
            const self = this
            function getReverseName() {
                let nameBackwards = '';
                for (let i = self.name.length - 1; i >= 0; i--) {
                    nameBackwards += self.name[i]
                }
                return nameBackwards
            }
            return `.${getReverseName()} omaihc im ,oaiC`
        }
    }

    expect(o.greetBackwards()).toBe('.eiluJ omaihc im ,oaiC')
})

test("...or use an arrow function where 'this' is bound lexically", () => {

    const o = {
        name: 'Julie',
        greetBackwards() {
            const getReverseName = () => {
                let nameBackwards = '';
                for (let i = this.name.length - 1; i >= 0; i--) {
                    nameBackwards += this.name[i]
                }
                return nameBackwards
            }
            return `.${getReverseName()} omaihc im ,oaiC`
        }
    }

    expect(o.greetBackwards()).toBe('.eiluJ omaihc im ,oaiC')
})

test("call", () => {

    const bruce = { name: "Bruce" }

    function greet() {
        return `Hello, I'm ${this?.name}`
    }

    expect(greet()).toBe("Hello, I'm undefined")

    // you can specify what this is bound to no matter how or where the 
    // function in question is called.
    // call is a method available on all functions that allows you to call 
    // the function with a specific value of this.
    expect(greet.call(bruce)).toBe("Hello, I'm Bruce")

    // The first argument to call is the value that this will bind to.
    // The remaining arguments become arguments to the function you're 
    // calling:
    function greetWithAge(age) {
        return `${this.name}, ${age}`
    }
    expect(greetWithAge.call(bruce, 33)).toBe("Bruce, 33")
})
