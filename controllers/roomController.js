async function createRoom(id, socket, io){

  let room = await io.in(id).allSockets() // Get all clients in room
  let clients = [...room].length // Number of clients in room

  if(clients){

    if(clients < 2){
      // Add a new player in room
      socket.join(id)
      clients++

      if(clients == 2){
        // Start a game when the room has 2 clients
        io.in(id).emit('dataBinding')
      }

    }else{
      // Just 2 clients for room
      socket.emit('failToEnter')
      socket.disconnect()
    }

  }else{
    // If the room dont exist, create a new room
    socket.join(id)
  }
}

module.exports = {
  createRoom
}