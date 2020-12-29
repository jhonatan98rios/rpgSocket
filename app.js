const express = require('express')
const app = express()
const server = require('http').createServer(app)
const connection = require('./controllers/socketController')
const bodyParser = require('body-parser')
const { createUser } = require('./controllers/userController')

// Create the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Running')
})

// Use static template like response
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());   

app.post('/auth', function(req, res) {

  let message = createUser(req.body.user_name, req.body.user_pass)

  res.send({'message': message});
});

// Connect the user with the server
connection(server)