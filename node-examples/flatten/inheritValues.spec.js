const input = {
    type: 'Type 1',
    displayId: 'Display ID 1',
    sons: [
        {
            name: 'Figlio 1',
            children: [
                {
                    name: 'Nipote 1',
                    children: []
                }
            ]
        }, {
            name: 'Figlio 2',
            children: []
        }
    ]
}

const expected = [
    {
        name: 'Figlio 1',
        type: 'Type 1',
        displayId: 'Display ID 1',
    },
    {
        name: 'Nipote 1',
        type: 'Type 1',
        displayId: 'Display ID 1',
    },
    {
        name: 'Figlio 2',
        type: 'Type 1',
        displayId: 'Display ID 1',
    }
]

const transformElement = (element, parentsFieldToAddToChildren) => ({
    name: element.name,
    ...parentsFieldToAddToChildren
})

const flattenParent = parent => {
    const parentsFieldToAddToChildren = {
        type: parent.type,
        displayId: parent.displayId
    }
    return flattenChildrenArray(parent.sons, parentsFieldToAddToChildren)
}

const flattenChildrenArray = (inputArray, parentsFieldToAddToChildren) => {
    if (inputArray.length === 0) {
        return []
    } else {
        const array = []
        for (let currentElement of inputArray) {
            array.push(
                transformElement(currentElement, parentsFieldToAddToChildren),
                ...flattenChildrenArray(currentElement.children, parentsFieldToAddToChildren)
            )
        }
        return array
    }
}

describe('Test:', () => {
    it('should flatten parent', () => {
        expect(flattenParent(input)).toStrictEqual(expected)
    })
})
