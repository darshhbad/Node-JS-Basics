const path=require('path')

const express=require('express')

const routeDr=require('../util/path')

const router=express.Router()

//routes name can be same as request methods ar different in below 2
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(routeDr,'views','add-product.html'))
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

module.exports=router