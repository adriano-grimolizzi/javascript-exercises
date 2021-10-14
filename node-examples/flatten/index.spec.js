const inputMachine = 
    {
        nomeCognome: 'st padre 1',
        status: "ACTIVE",
        startDate: 100,
        endDate: 109,
        "package": true,
        "child": false,
        "children": [
            {
                nomeCognome: "st figlio 1",
                status: "NOT ACTIVE",
                startDate: 200,
                endDate: 209,
                "package": true,
                "child": false,
                "children": [
                    {
                        nomeCognome: "st nipote 1",
                        status: "status nipote 1",
                        startDate: 300,
                        endDate: 309,
                        "package": false,
                        "child": true,
                        "children": [],
                    },
                    {
                        nomeCognome: "st nipote 2",
                        status: "status nipote 2",
                        startDate: 310,
                        endDate: 319,
                        "package": false,
                        "child": true,
                        "children": [],
                    }
                ],
            },
            {
                nomeCognome: "st figlio 2",
                status: "SEMI ACTIVE",
                startDate: 210,
                endDate: 219,
                "package": false,
                "child": true,
                "children": [],
            }
        ],
    }


const expected = [
    {
        // identifier: "id 1",
        nome: 'st padre 1',
        status: "ACTIVE",
        // type: "C",
        start_date: 100,
        end_date: 109,
    },
    {
        // identifier: "id 1",
        nome: "st figlio 1",
        status: "NOT ACTIVE",
        // type: "C",
        start_date: 200,
        end_date: 209,
    },{
        // identifier: "id 1",
        nome: "st nipote 1",
        status: "status nipote 1",
        // type: "C",
        start_date: 300,
        end_date: 309,
    },
    {
        // identifier: "id 1",
        nome: "st nipote 2",
        status: "status nipote 2",
        // type: "C",
        start_date: 310,
        end_date: 319,
    },
    {
        // identifier: "id 1",
        nome: "st figlio 2",
        status: "SEMI ACTIVE",
        // type: "C",
        start_date: 210,
        end_date: 219,
    }
]

const transformMachine = machine => ({
    nome: machine.nomeCognome,
    status: machine.status,
    start_date: machine.startDate,
    end_date: machine.endDate,
})

const flattenMachine = machine => flattenMachineArray([machine])

const flattenMachineArray = machineArray => {
    if (machineArray.length === 0) {
        return []
    } else {
        const array = []
        for (let machine of machineArray) {
            array.push(transformMachine(machine), ...flattenMachineArray(machine.children))
        }
        return array
    }
}

describe('machine test', () => {

    it('should flatten machines', () => {
        expect(flattenMachine(inputMachine)).toEqual(expected)
    })

    it('should trasform machine', () => {
        const input = {
            nomeCognome: "st figlio 1",
            status: "NOT ACTIVE",
            startDate: 200,
            endDate: 209,
            "package": false,
            "child": true,
            "children": [],
        }
        const result = {
            nome: "st figlio 1",
            status: "NOT ACTIVE",
            start_date: 200,
            end_date: 209,
        }
        expect(transformMachine(input)).toEqual(result)
    })
})