const move = (array1, array2, element) => {
    const elementIndex = array1.indexOf(element)
    if (elementIndex > -1) {
        array1.splice(elementIndex, 1)
        array2.push(element)
    }
}

describe("move test", () => {
    it("should move", () => {
        const array1 = ['Abel', 'Babilonia', 'Corey']
        const array2 = ['David', 'Goliath']

        move(array1, array2, 'Babilonia')

        expect(array1).toStrictEqual(['Abel', 'Corey'])
        expect(array2).toStrictEqual(['David', 'Goliath', 'Babilonia'])
    })

    it("shouldn't move", () => {
        const array1 = ['Abel', 'Babilonia', 'Corey']
        const array2 = ['David', 'Goliath']

        move(array1, array2, 'Holden')

        expect(array1).toStrictEqual(['Abel', 'Babilonia', 'Corey'])
        expect(array2).toStrictEqual(['David', 'Goliath'])
    })
})