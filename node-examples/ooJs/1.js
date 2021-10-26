function createNewPerson(name) {
    const object = {}
    object.name = name
    object.greeting = () => console.log(`Hi, I'm ${object.name}.`)
    return object
}

const salva = createNewPerson('Salva')
salva.greeting()