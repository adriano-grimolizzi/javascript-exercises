const compareByName = (a, b) => {
    if (a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0
    }
}

compareByAge = (a, b) => a.age - b.age

compareByMoney = (a, b) => b.money - a.money

const compareFunctionsArray = [
    compareByName,
    compareByAge,
    compareByMoney
]

const multisort = (array) => array.sort(wrapper)

const wrapper = (a, b) => {
    for (let current of compareFunctionsArray) {
        const result = current(a, b)
        if (result) {
            return result
        }
    }
    return 0
}


describe('sort test', () => {
    test('sort by NAME', () => {

        const input = [
            { name: 'Eva' },
            { name: 'Davide' },
            { name: 'Carlo' },
            { name: 'Adamo' },
            { name: 'Bruno' },
        ]

        const expected = [
            { name: 'Adamo' },
            { name: 'Bruno' },
            { name: 'Carlo' },
            { name: 'Davide' },
            { name: 'Eva' },
        ]

        expect(multisort(input)).toStrictEqual(expected)
    })

    test('sort by AGE', () => {

        const input = [
            { age: 2 },
            { age: 4 },
            { age: 3 },
            { age: 1 },
            { age: 5 },
        ]

        const expected = [
            { age: 1 },
            { age: 2 },
            { age: 3 },
            { age: 4 },
            { age: 5 },
        ]

        expect(multisort(input)).toStrictEqual(expected)
    })

    test('sort by MONEY', () => {

        const input = [
            { money: 2 },
            { money: 4 },
            { money: 3 },
            { money: 1 },
            { money: 5 },
        ]

        const expected = [
            { money: 5 },
            { money: 4 },
            { money: 3 },
            { money: 2 },
            { money: 1 },
        ]

        expect(multisort(input)).toStrictEqual(expected)
    })

    test('sort by all', () => {

        const input = [
            {
                name: 'B',
                age: 1
            },
            {
                name: 'A',
                age: 2
            },
            {
                name: 'B',
                age: 2
            },
            {
                name: 'A',
                age: 1
            },
        ]

        const expected = [
            {
                name: 'A',
                age: 1
            },
            {
                name: 'A',
                age: 2
            },
            {
                name: 'B',
                age: 1
            },
            {
                name: 'B',
                age: 2
            },
        ]

        expect(multisort(input)).toStrictEqual(expected)
    })

    test('sort by name, age and money', () => {

        const input = [
            {
                name: 'C',
                age: 0,
                money: 300,
            },
            {
                name: 'A',
                age: 2,
                money: 200,
            },
            {
                name: 'B',
                age: 2,
                money: 300,
            },
            {
                name: 'A',
                age: 1,
                money: 50,
            },
            {
                name: 'A',
                age: 2,
                money: 100,
            },
            {
                name: 'B',
                age: 1,
                money: 200,
            },
            {
                name: 'A',
                age: 2,
                money: 150,
            }
        ]

        const expected = [
            {
                name: 'A',
                age: 1,
                money: 50,
            },
            {
                name: 'A',
                age: 2,
                money: 200,
            },
            {
                name: 'A',
                age: 2,
                money: 150,
            },
            {
                name: 'A',
                age: 2,
                money: 100,
            },
            {
                name: 'B',
                age: 1,
                money: 200,
            },
            {
                name: 'B',
                age: 2,
                money: 300,
            },
            {
                name: 'C',
                age: 0,
                money: 300,
            },

        ]

        expect(multisort(input)).toStrictEqual(expected)
    })
})