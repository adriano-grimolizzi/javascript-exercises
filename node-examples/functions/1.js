// destructuring arguments
function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`
}

console.log(getSentence({ subject: 'Io', verb: 'Odio', object: 'Tibco' }))

// spread operator
function addPrefix(prefix, ...words) { // the spread must be the last argument
    const prefixedWords = []
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i]
    }
    return prefixedWords
}

console.log(addPrefix("con", "verse", "vex"))

// default arguments
function f(name = "Giuseppina") {
    console.log(name)
}

f('Adriano')
f()

// Functions as Properties of Objects
const o1 = {
    name: 'Wallace',
    bark: () => { return 'Woof!' }
}

const o2 = {
    name: 'Wallace',
    bark() { return 'Woof!' }
}
