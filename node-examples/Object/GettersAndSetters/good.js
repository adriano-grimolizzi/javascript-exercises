function makeBankAccount() {
    let balance = 0

    function getBalance() {
        return balance
    }

    function setBalance(amount) {
        balance = amount
    }

    return {
        getBalance, 
        setBalance,
    }
}

const account = makeBankAccount()
account.balance = 100
