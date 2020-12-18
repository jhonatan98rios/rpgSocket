function attack(socket){

    let precision = Math.floor(Math.random() * 20)
    let damage = Number()

    if(precision < 5){
        damage =  0
        socket.emit('missed')

    } else if(precision <= 10){
        damage =  Math.floor(Math.random() * 5)
    }else if(precision <= 15){
        damage =  Math.floor(Math.random() * 10)
    }else{
        damage =  Math.floor(Math.random() * 15)
        socket.emit('critical')
    }

    socket.to(socket.room).emit('damage', damage)
}

module.exports = {
    attack
}