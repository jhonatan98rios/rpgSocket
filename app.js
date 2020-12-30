const express = require('express')
const app = express()
const server = require('http').createServer(app)
const connection = require('./controllers/socketController')
const bodyParser = require('body-parser')
const { createUser, loginUser, loginToken } = require('./controllers/userController')


// Create the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Running')
})


// Configure de server
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());   


// Create a new User
app.post('/sign', async function(req, res) {
  let result = await createUser(req.body.user_name, req.body.user_pass)

  if (result){    
    res.send(`Usuário ${req.body.user_name} criado com sucesso`)

  }else{
    res.status(400)
    res.send('Erro a conectar')
  }
});


// Login
app.post('/login', async function(req, res){
  let result = await loginUser(req.body.user_name, req.body.user_pass)
  if(result){
    res.send(result)

  }else{
    res.status(400)
    res.send('Erro a conectar')
  }
})

// Token Login
app.post('/token_login', async function(req, res){
  let result = await loginToken(req.body.user_name, req.body.token)
  if(result){
    res.send(result)

  }else{
    res.status(400)
    res.send('Erro a conectar')
  }
})


// Connect the user with the server
connection(server)

