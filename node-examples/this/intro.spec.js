// Inside a function body, a special read-only value called 'this' is available

const objectWithNestedFunction = {
    name: 'Adriano',
    greetBackwards() {
        function getReverseName() {
            let nameBackwards = ''
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i]
            }
            return nameBackwards
        }
        return `.${getReverseName()} si eman ym ,olleH`
    }
}

const objectWithNestedArrowFunction = {
    name: 'Adriano',
    greetBackwards() {
        const getReverseName = () => {
            let nameBackwards = ''
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i]
            }
            return nameBackwards
        }
        return `.${getReverseName()} si eman ym ,olleH`
    }
}

describe('this test:', () => {
    it('nested function should throw TypeError', () => {
        expect(() => { objectWithNestedFunction.greetBackwards() }).toThrow(TypeError)
    })
    it('arrow function should bind lexically and work', () => {
        expect(objectWithNestedArrowFunction.greetBackwards()).toEqual('.onairdA si eman ym ,olleH')
    })
})

