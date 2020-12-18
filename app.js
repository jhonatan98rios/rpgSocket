const express = require('express')
const app = express()
const server = require('http').createServer(app)
const connection = require('./controllers/socketController')

// Create the server
server.listen(process.env.PORT || 3000, () => {
  console.log('Running')
})

// Use static template like response
app.use(express.static(__dirname + "/public"))

// Connect the user with the server
connection(server)