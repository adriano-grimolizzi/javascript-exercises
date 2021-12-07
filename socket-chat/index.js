const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = http.createServer(app)
const socketServer = new Server(httpServer)

// for using external css file in client/index.html
app.use(express.static(__dirname + '/client')) 

app.get('/', (_request, response) => {
    response.sendFile(__dirname + '/client/index.html')
})

socketServer.on('connection', socket => {
    socket.on('chat message', message => {
        console.log('message: ' + message)
    })
    console.log('a user connected')
})

httpServer.listen(3000, () => {
    console.log('listening on *:3000')
})
