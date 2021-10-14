const updateObject = (objectToUpdate, objectKeysToUpdate, newValue) => {
    const result = { ...objectToUpdate };
    objectKeysToUpdate.forEach(objectKey => {
        if (result[objectKey]) {
            result[objectKey] = newValue
        }
    });
    return result
}

describe("update object test:", () => {
    it("should update object", () => {
        const objectToUpdate = {
            Punto: 'Good',
            Panda: 'Good',
            Tibco: 'Very Good',
            Football: 'Awesome'
        }

        const newObject = {
            Punto: 'Good',
            Panda: 'Good',
            Tibco: 'BAD!',
            Football: 'BAD!'
        }

        const objectKeysToUpdate = ['Tibco', 'Football']

        const newValue = "BAD!"
        expect(updateObject(objectToUpdate, objectKeysToUpdate, newValue)).toEqual(newObject)
    })
})
