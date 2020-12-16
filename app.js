const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Create the server
server.listen(process.env.PORT || 3000, () => {
    console.log('Running')
})

// Use static template like response
app.use(express.static(__dirname + "/public"))

// Connect the user with the server
io.on('connection', async (socket) => {

    // Start the connection
    console.log('\nNova conexão')

    // Exemple of message
    socket.on('attack', () => {
        socket.to(socket.room).emit('damage')
    })

    socket.on('logout', () => {
        socket.to(socket.room).emit('win')
        socket.disconnect()
    })

    // Send message for all user, except for the sender
    socket.broadcast.emit('bc', socket.id + ' connected')

    let ids = await io.allSockets();
    let connectedUsers = [...ids]

    if(connectedUsers.length <= 2){
        socket.join('beta')
        socket.room = 'beta'
        console.log('beta')

    }else {
        socket.emit('failToEnter')
        socket.disconnect()
    }

})