const duck = {
    walk: "duck",
    quack: function() {
        console.log('Quack!')
    }
}

const roboDuck = {
    walk: "duck",
    quack: function() {
        console.log('Robo Quack!')
    }
}

const goose = {
    walk: "goose",
    honk: function() {
        console.log('Honk Honk!')
    }
}

const animals = [duck, roboDuck, goose]

animals
    .filter(animal => animal.walk === 'duck')
    .forEach(animal => animal.quack())
