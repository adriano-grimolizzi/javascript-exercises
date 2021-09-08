// VARIABLE MASKING

const { log } = require('./utils')

const x = "blue"

log(x)

{
    const x = 1234
    log(x)
}

log(x) // blue
