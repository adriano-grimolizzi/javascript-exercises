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
        name: 'Figlio 1'
    },
    {
        name: 'Nipote 1'
    },
    {
        name: 'Figlio 2'
    }
]

const transformOffer = offer => ({
    name: offer.name
})

const flattenOffer = offer => flattenOfferArray(offer.sons)

const flattenOfferArray = offerArray => {
    if (offerArray.length === 0) {
        return []
    } else {
        const array = []
        for (let offer of offerArray) {
            array.push(transformOffer(offer), ...flattenOfferArray(offer.children))
        }
        return array
    }
}

describe('Test:', () => {
    it('should do something', () => {
        expect(flattenOffer(input)).toEqual(expected)
    })
})