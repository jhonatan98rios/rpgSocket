const express = require('express')
const app = express()
const server = require('http').createServer(app)
const connection = require('./controllers/socketController')
const bodyParser = require('body-parser')
const cors = require('cors')
const { createUser, loginUser, loginToken } = require('./controllers/userController')
const { levelUp } = require('./controllers/perfilController')


// Create the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Running')
})


// Configure de server
//app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(cors())   


// Create a new User
app.post('/sign', async function(req, res) {
  let result = await createUser(req.body.user_name, req.body.user_pass)

  if (result > 0){

    res.status(200)    
    res.send(`Sua conta foi criada com sucesso!`)

  }else if(result == false){

    res.status(409)
    res.send(`Esse nome de usuário já existe`)

  } else {

    res.status(400)
    res.send('Erro a conectar')

  }
});


// Login
app.post('/login', async function(req, res){

  let result = await loginUser(req.body.user_name, req.body.user_pass)

  if(result.user){

    res.status(200)
    res.send(result)

  }else if(result == false){

    res.status(404)
    res.send('Usuário ou senha não encontrados')

  }else {

    res.status(400)
    res.send('Erro a conectar. Verifique seus dados e sua conexão e tente novamente')

  }
})

// Token Login
app.post('/token_login', async function(req, res){
  let result = await loginToken(req.body.user_name, req.body.token)
  if(result.user){
    res.status(200)
    res.send(result)
  }else{
    res.status(404)
    res.send('Token inválido')
  }
})

// Level Up
app.post('/level_up', async function(req, res){
  let result = await levelUp(req.body.perfil)
  if(result) {
    res.status(200)
    res.send('Parabéns, você subiu de nível!!')
  }
  else{
    res.status(404)
    res.send('Erro ao atualizar o nível')
  }
})


// Connect the user with the server
connection(server)

