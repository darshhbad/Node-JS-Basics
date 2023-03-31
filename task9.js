const express=require('express')

const app=express()

const adminroutes=require('./express_routes/admin')

const shoproutes=require('./express_routes/shop')

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminroutes)

app.use(shoproutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4000)