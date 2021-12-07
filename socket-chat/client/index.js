const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', event => {
    event.preventDefault()
    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})
