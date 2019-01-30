var cat = {
    name: 'Muffin',
    sayHello: function() {
        console.log("Hello, I'm a cat.");
    },
    meow: function() {
        console.log("Miao!");
    },
}

var bird = {
    name: 'Cippio',
    sayHello: function() {
        console.log("Hello, I'm a bird.");
    },
    tweet: function() {
        console.log("Cip Ciop!");
    }
}

cat.sayHello();
bird.sayHello();

cat.__proto__ = bird;

cat.sayHello(); // Still the same, but...

cat.tweet(); // The cat can now tweet!

cat.meow(); // the meow() method is not removed though.