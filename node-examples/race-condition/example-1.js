const randomDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 100))

let balance = 0

async function loadBalance() {
    await randomDelay()
    return balance
}

async function saveBalance(value) {
    await randomDelay()
    balance = value
}

async function sellResource() {
    const balance = await loadBalance()
    const newBalance = balance + 50
    await saveBalance(newBalance)
}

async function main() {
    const transaction1 = sellResource()
    const transaction2 = sellResource()
    await transaction1
    await transaction2
    const balance = await loadBalance()
    console.log(`Final balance: ${balance}`)

}

main()

// https://www.nodejsdesignpatterns.com/blog/node-js-race-conditions/
