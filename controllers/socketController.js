const socketio = require('socket.io')
const roomController = require('./roomController')

module.exports = function connection(server){

  io = socketio(server)

  io.on('connection', async (socket) => {
  
    // Exemple of message
    socket.on('attack', (dmg) => {
      socket.to(socket.room).emit('damage', dmg)
      io.in(socket.room).emit('toogleTurn')
    })
  
    // Change the active player
    socket.on('changeTurn', () => {
      socket.to(socket.room).emit('turnOn')
    })

    //  Enter in room
    socket.on('connectRoom', id => {
      socket.room = id
      roomController.createRoom(id, socket, io)
    })
  
    // Exit the room
    socket.on('logout', () => {
      socket.to(socket.room).emit('win')
      socket.disconnect()
    })
  })
}