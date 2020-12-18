async function createRoom(id, socket, io){

  let ids = await io.allSockets();
  let connectedUsers = [...ids]

  console.log(connectedUsers)

  if (connectedUsers.length <= 2) {
    socket.join(id)

    if (connectedUsers.length == 2){
      console.log('startGame in', id)
      //io.in(id).emit('startGame')


      io.to(connectedUsers[0]).emit('startGame')
      io.to(connectedUsers[1]).emit('startGame')
      
      socket.emit('turnOn')
    }

  } else {
    socket.emit('failToEnter')
    socket.disconnect()
  }
}

module.exports = {
  createRoom
}