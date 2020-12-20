const socketio = require('socket.io')
const roomController = require('./roomController')

module.exports = function connection(server){

  io = socketio(server)

  io.on('connection', async (socket) => {

    // Start the connection
    console.log('\nNova conexão')
  
    // Exemple of message
    socket.on('attack', (dmg) => {
      //fightController.attack(socket)
      console.log(dmg)
      socket.to(socket.room).emit('damage', dmg)
      io.in(socket.room).emit('toogleTurn')
    })
  
    socket.on('changeTurn', () => {
      socket.to(socket.room).emit('turnOn')
    })
  
    socket.on('logout', () => {
      socket.to(socket.room).emit('win')
      socket.disconnect()
    })
  

    socket.on('connectRoom', id => {
      socket.room = id
      roomController.createRoom(id, socket, io)
    })


    

  })
}