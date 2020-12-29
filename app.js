const express = require('express')
const app = express()
const server = require('http').createServer(app)
const connection = require('./controllers/socketController')
const bodyParser = require('body-parser')
const { createUser, loginUser } = require('./controllers/userController')


// Create the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Running')
})


// Configure de server
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());   


// Create a new User
app.post('/sign', function(req, res) {
  let message = createUser(req.body.user_name, req.body.user_pass)
  res.send({'message': message})
});


// Login
app.post('/login', function(req, res){
  let message = loginUser(req.body.user_name, req.body.user_pass)
  res.send({'message': message})
})



// Connect the user with the server
connection(server)