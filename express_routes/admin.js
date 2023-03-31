const express=require('express')

const router=express.Router()

//routes name can be same as request methods ar different in below 2
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>')
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

module.exports=router