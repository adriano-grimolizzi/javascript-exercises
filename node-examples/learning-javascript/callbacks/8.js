const { EventEmitter } = require('events')

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super()
        this.seconds = seconds
        this.superstitious = !!superstitious
    }
    go() {
        const countdown = this
        return new Promise((resolve, reject) => {
            for (let i = countdown.seconds; i >= 0; i--) {
                setTimeout(() => {
                    if (countdown.superstitious && i === 13) {
                        return reject(new Error("NOT COUNTING THAT"))
                    }
                    countdown.emit('tick', i)
                    if (i === 0) resolve()
                }, (countdown.seconds - 1) * 1000)
            }
        })
    }
}

const countdown = new Countdown(15, true);

countdown.on('tick', (i) => {
    if (i>0) console.log(i + '...')
})

countdown.go().then(
    () => console.log('GO!'),
    (error) => console.error(error.message))
    