const express = require('express')
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./Models/emp')

var app = express()
app.use(cors())
//Route
app.get('/',(req,res)=>{
  res.send('hello world')
})
//MongoDB connection
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',(err)=>{
  console.log('Error', err);
})
//Server
app.listen(8000,()=>{
  console.log('Server is Up')
})

const mlRoute = require('./Routes/ml');
app.use('/api/ml', mlRoute);

const router = require('./Routes/emp')
app.use('/emp',router)

// Updated on Sun Jul  6 12:57:26 CDT 2025
