const done = true

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = "Here's what I build"
        resolve(workDone)
    } else {
        const why = "Still working on something else"
        reject(why)
    }
})

const checkIfItsDone = () =>
    isItDoneYet
        .then(ok => console.log(ok))
        .catch(err => console.error(err))

checkIfItsDone()

const fs = require('fs')

const getFile = (filename) => new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            reject(err)
            return
        }
        resolve(data)
    })
})

getFile('files/log.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err))