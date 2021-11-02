const o = {
    a: 2,
    m: function () {
        return this.a + 1
    }
}

/*
/   JS doesn't have "methods" in the form that class-based languages define them.
/   In JS, any function can be added to an object in the form of a property. An
/   inherited function acts just a any other property, including property 
/   shadowing as shown above.
/
/   When an inherited function is executed, the value of this points to the 
/   inheriting object, not the prototype object where the function is an own 
/   property.
*/

describe('prototype chain test', () => {
    test('methods test', () => {
        expect(o.m()).toBe(3)
        const p = Object.create(o)
        // p is an object that inherits from o
        p.a = 4
        expect(p.m()).toBe(5)
        // when p.m is called, 'this' refers to p.
        // When p inherits th function m of o,
        // 'this.a' means p.a, the property 'a' of p.
    })
})