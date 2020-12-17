const socketio = require('socket.io')

function connection(server){

  io = socketio(server)

  io.on('connection', async (socket) => {

    // Start the connection
    console.log('\nNova conexão')
  
    // Exemple of message
    socket.on('attack', () => {
      socket.to(socket.room).emit('damage')
      io.in(socket.room).emit('toogleTurn')
    })
  
    socket.on('changeTurn', () => {
      socket.to(socket.room).emit('turnOn')
    })
  
    socket.on('logout', () => {
      socket.to(socket.room).emit('win')
      socket.disconnect()
    })
  
    // Send message for all user, except for the sender
    socket.broadcast.emit('bc', socket.id + ' connected')
  
    let ids = await io.allSockets();
    let connectedUsers = [...ids]
  
    if (connectedUsers.length <= 2) {
      socket.join('beta')
      socket.room = 'beta'
  
      if (socket.id == connectedUsers[0]) {
        socket.emit('turnOn')
      }
  
    } else {
      socket.emit('failToEnter')
      socket.disconnect()
    }
  })
}


module.exports = {
  connection
}