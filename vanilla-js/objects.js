const changeObject = (object) => {
    const newName = 'Bruno'
    object.name = newName    
    return object
}

const person1 = { name: "Alessio" }

console.log(person1.name)

changeObject(person1)

console.log(person1.name)
