async function createRoom(id, socket, io){

  let room = await io.in(id).allSockets()
  let clients = [...room].length

  if(clients){

    if(clients < 2){
      console.log('startGame in', id)
      socket.join(id)

      clients++

      if(clients == 2){
        io.in(id).emit('startGame')
        socket.emit('turnOn')

      }
    }else{
      // Just 2 clients for room
      socket.emit('failToEnter')
      socket.disconnect()
    }

  }else{
    console.log('Created a new room: ', id)
    socket.join(id)
  }
}

module.exports = {
  createRoom
}