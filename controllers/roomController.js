async function createRoom(id, socket, io){

  let ids = await io.sockets.adapter.rooms[id] ? io.sockets.adapter.rooms[id].sockets : null;

  console.log([...io.sockets.adapter.rooms])

  if (ids){

    let connectedUsers = [...ids]
  
    console.log(connectedUsers)
  
    if (connectedUsers.length <= 2) {
      socket.join(id)
  
      if (connectedUsers.length == 2){
        console.log('startGame in', id)
        io.in(id).emit('startGame')
  
        socket.emit('turnOn')
      }
  
    } else {
      socket.emit('failToEnter')
      socket.disconnect()
    }
  }else{
    console.log('startGame in', id)
    socket.join(id)
  }
}

module.exports = {
  createRoom
}