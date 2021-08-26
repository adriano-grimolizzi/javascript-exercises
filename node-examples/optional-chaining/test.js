/**
 * Optional Chaining (?.)
 * The optional chaining operator (?.) enables y uto read the value 
 * of a property located deep within a chain of connected objects
 * without having to check that each reference in the chain is valid. 
 * 
 * https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest
 */

test("Searching for a non-existing field on a non-null object should return undefined", () => {

    const person = {} 

    expect(person.age).toBe(undefined)    
})

test("Searching for a field on a null object should throw an exception", () => {

    const person = null    
    
    // If you want to test whether an existin function will throw an exception,
    // you will have to wrap it inside an anonymous function
    expect(() => {person.age}).toThrow(TypeError)
})

test("You have to check if the parent object is thruthy", () => {

    const person = undefined

    expect(person && person.age).toBe(undefined)

    // Optional chaining operator!
    expect(person?.age).toBe(undefined)
})
