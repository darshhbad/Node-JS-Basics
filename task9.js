// const http = require ('http')

const express=require('express')

const app=express()

app.use((req,res,next)=>{
    console.log("In the middleware")
    next() //Allows request to continue to next middleware
})

app.use((req,res,next)=>{
    console.log("In another middleware")
    res.send('{"key1":"value1"}')
})

// const server=http.createServer(app)

// server.listen(4000);

app.listen(4000)