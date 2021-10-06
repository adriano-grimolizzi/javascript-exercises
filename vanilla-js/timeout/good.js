const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))


const function1 = async () => {
    console.log('start')

    await timeout(3 * 1000)

    console.log('stop')
}

function1()