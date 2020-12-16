const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Create the server
server.listen(3000, () => {
    console.log('Running')
})

// Use static template like response
app.use(express.static(__dirname + "/public"))

// Connect the user with the server
io.on('connection', (socket) => {

    // Start the connection
    // socket is the connections
    console.log('Nova conexão', socket.id)


    // Exemple of message
    socket.on('message', () => {
        console.log("Mensagem recebida")
        io.emit('response')
    })


    // Exemple of broadcast
    // Send message for all user, except for the sender
    socket.broadcast.emit('bc', socket.id + ' connected')
})