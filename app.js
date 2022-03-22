const express = require('express')
const app = express()
const PORT = 4000
const { MONGOURI } = require('./keys')
const mongoose = require('mongoose')

const AuthentificationRoute = require('./routes/authentification')



//connect to database
mongoose.connect(MONGOURI)

// DB Connected
mongoose.connection.on('connected',()=>{
    console.log('MongoDB is connected successfully')
})

//DB connection Failed
mongoose.connection.on('error',(err)=>{
    console.log('MongoDB connection failed',console.err)
})

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Test Technique StrategIn')
})

app.listen(PORT,()=>{
    console.log('-- Server is Running on ',PORT)
})

app.use('/',AuthentificationRoute)