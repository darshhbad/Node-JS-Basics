const path=require('path')

const express=require('express')

const app=express()

const adminroutes=require('./express_routes/admin')

const shoproutes=require('./express_routes/shop')

const contactroutes=require('./express_routes/contact')

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminroutes)

app.use(shoproutes)

app.use(contactroutes)

const successcontrol=require('./controllers/contact')

app.use(express.static(path.join(__dirname,'public')))

app.post('/success',successcontrol.success)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error-page.html'))
})

app.listen(4000)