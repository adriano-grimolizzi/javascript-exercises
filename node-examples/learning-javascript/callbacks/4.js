// ERROR-FIRST CALLBACK

const fs = require('fs')

const filename = 'not_exists.txt'
fs.readFile(filename, (error, data) => {
    if (error) {
        return console.error(`Error reading file ${filename}: ${error.message}`)
    }
    console.log(`${filename} contents: ${data}`)
})

// If error is falsy we:
// 1) report the error to console
// 2) immediatly return 
// (here we combine the 2 in one statement)

// This is the most often overlooked mistake with error-first callbacks:
// the programm will remember to check and log, but not return.
// If the function is allowed to continue, it may rely on the callback
// having been successfull, which it wasn't.
