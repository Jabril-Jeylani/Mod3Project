// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Load CORS
const cors = require('cors')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config')

// Connect to database
connectDB()

app.use(express.json())
app.use(cors())

// "root" route         
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})