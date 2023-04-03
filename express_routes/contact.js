// const path=require('path')

const express=require('express')

const contactcontroller=require('../controllers/contact')
// const routeDr=require('../util/path')

const router=express.Router()

router.get('/contact',contactcontroller.getcontact)


module.exports=router