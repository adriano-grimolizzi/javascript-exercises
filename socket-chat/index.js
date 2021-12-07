const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const socketServer = new Server(httpServer)

// for using external css file in public/index.html
app.use(express.static(__dirname + '/public')) 

app.get('/', (_request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

socketServer.on('connection', socket => {
    socket.on('chat message', message => {
        socketServer.emit('chat message', message)
    })
})

httpServer.listen(3000, () => {
    console.log('listening on *:3000')
})
