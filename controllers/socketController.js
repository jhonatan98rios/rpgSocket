const socketio = require('socket.io')
const roomController = require('./roomController')
const dotenv = require('dotenv');

module.exports = function connection(server){

  io = socketio(server, {
    cors: {
      origin: process.env.ORIGIN,
      methods: ["GET", "POST"]
    }
  })

  io.on('connection', async (socket) => {
  
    // 
    socket.on('attack', (dmg) => {
      socket.to(socket.room).emit('damage', dmg)
      io.in(socket.room).emit('toogleTurn')
    })

    // useCure
    socket.on('useCure', (cureValue) => {
      socket.to(socket.room).emit('oponnentCure', cureValue)
      io.in(socket.room).emit('toogleTurn')
    })

    // useDefense
    socket.on('useDefense', () => {
      socket.to(socket.room).emit('oponnentDefense')
      io.in(socket.room).emit('toogleTurn')
    })
  
    // Change the active player
    socket.on('changeTurn', () => {
      socket.to(socket.room).emit('turnOn')
    })

    //  Enter in room
    socket.on('connectRoom', data => {
      socket.room = data.id
      roomController.createRoom(data.id, socket, io)
    })

    //  Data binding between users
    socket.on('sendPlayerData', perfil => {
      socket.to(socket.room).emit('startGame', perfil)
    })
  
    // Exit the room
    socket.on('logout', () => {
      socket.to(socket.room).emit('win')
      socket.disconnect()
    })
  })
}