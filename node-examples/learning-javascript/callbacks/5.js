// ERROR HANDLING

const fs = require('fs')

const readSketchyFile = () => {
    try {
        fs.readFile('does_not_exists.txt', (error, data) => {
            if (error) throw error;
        })
    } catch(error) {
        console.log('warning: minor issue occurred, program continuing')
    }
}

readSketchyFile()

// This WON'T work. The try...catch blocks only work within the same function.
// The try...catch block is in readSketchyFile, but the error is thrown inside
// the anonymous function that fs.readFile invokes as a callback.

// There's nothing to prevent your callback from accidentally getting called
// twice - or never getting called at all.
