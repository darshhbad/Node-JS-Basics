const path=require('path')

const express=require('express')

const routeDr=require('../util/path')

const router=express.Router()

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(routeDr,'views','contact.html'))
})


module.exports=router