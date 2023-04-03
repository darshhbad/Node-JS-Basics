const path=require('path')
const routeDr=require('../util/path')
exports.getcontact=(req,res,next)=>{
    res.sendFile(path.join(routeDr,'views','contact.html'))
}

exports.success=(req,res,next)=>{
    res.sendFile(path.join(routeDr,'views','formfilled.html'))
}