function attackEmiter(socket, blocking) {

  let precision = Math.floor(Math.random() * 20)
  let damage = Number()

  if(!blocking){
    // If the oponnent wasnt blocking, u can apply full damage
    damage = precision < 3 ? 0 :
      precision <= 10 ? Math.floor(Math.random() * 5) + 5 :
        precision <= 15 ? Math.floor(Math.random() * 5) + 10 :
          Math.floor(Math.random() * 10) + 15
  }else{
    // If the oponent was blocking, u can apply, just half damage, or receive a counter
    damage = precision <= 7 ? -1 :
      precision <= 12 ? Math.floor((Math.random() * 5 + 5) / 2) :
        precision <= 18 ? Math.floor((Math.random() * 5 + 10) / 2) :
          Math.floor((Math.random() * 10 + 15) / 2)
  }


  socket.emit('attack', damage)

  return damage
}

function cureEmitter(socket, userHealth){
  let cureValue = (Math.floor(Math.random() * 20)) + 10

  if(userHealth + cureValue > 200){
    cureValue = 200 - userHealth
  }

  socket.emit('useCure', cureValue)
  return cureValue
}

function defenseEmitter(socket){
  socket.emit('useDefense')
}