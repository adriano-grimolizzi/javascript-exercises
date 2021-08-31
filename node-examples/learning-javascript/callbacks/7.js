const countdown = (seconds) => new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
        setTimeout(() => {
            if (i === 13) reject(new Error("NOT COUNTING THAT!"))
            if (i > 0) console.log(i + "...")
            else resolve(console.log("GO!"))
        }, (seconds - i) * 1000)
    }
})

countdown(15).then(
    () => console.log('countdown completed successfully'),
    (error) => console.log(error.message))
    