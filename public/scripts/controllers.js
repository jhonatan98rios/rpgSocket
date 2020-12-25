function attackEmiter(socket) {

  let precision = Math.floor(Math.random() * 20)
  let damage = precision < 3 ? 0 :
    precision <= 10 ? Math.floor(Math.random() * 5) + 5 :
      precision <= 15 ? Math.floor(Math.random() * 5) + 10 :
        Math.floor(Math.random() * 5) + 15

  socket.emit('attack', damage)

  return damage
}

function makeAnimation(opponent) {
  opponent.classList.add("blink")

  let blinker = setInterval(() => {
    opponent.classList.remove("blink")
    clearInterval(blinker)
  }, 1000)
}

function cureEmitter(socket, userHealth){
  let cureValue = (Math.floor(Math.random() * 20)) + 10

  if(userHealth + cureValue > 200){
    cureValue = 200 - userHealth
  }

  socket.emit('useCure', cureValue)
  return cureValue
}