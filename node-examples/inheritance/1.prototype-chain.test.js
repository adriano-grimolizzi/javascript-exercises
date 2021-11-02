const F = function() { // arrow functions can never be used as constructor functions
    this.a = 1
    this.b = 2
}

const o = new F()

F.prototype.b = 3
F.prototype.c = 4

describe('prototype chain test', () => {
    test('object test', () => {
        expect(o.a).toBe(1)
        expect(o.b).toBe(2)
        expect(o.c).toBe(4)
        expect(o.d).toBe(undefined)            
    })
})
