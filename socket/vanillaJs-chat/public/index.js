const socket = io()

const messages = document.getElementById('messages')
const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', event => {
    event.preventDefault()
    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})

socket.on('chat message', message => {
    const item = document.createElement('li')
    item.textContent = message
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})
