const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

const PORT = 3001

// for using external css file in public/index.html
app.use(express.static(__dirname + '/public'))

app.get('/', (_request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

io.on('connection', socket => {
    console.log('New connection')
    socket.on('chat message', message => {
        console.log(`New message: ${message}`)
        io.emit('chat message', message)
    })
})

httpServer.listen(PORT, () => console.log(`listening on *:${PORT}`))
