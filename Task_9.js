const fs=require('fs')
const requestHandler=(req,res)=>{
    const url=(req.url)
    const method=req.method
    if (url==='/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end()
     }
     if (url=='/message' && method==='POST'){
         const body=[]
         req.on('data',(chunk)=>{
             console.log(chunk)
             body.push(chunk);
         })
         return req.on('end',()=>{
             const parsebody=Buffer.concat(body).toString()
             const msg=parsebody.split('=')[1]
             fs.writeFile('message.txt',msg,(error)=>{
                 res.statusCode=302
                 res.setHeader('Location','/')
                 return res.end()
             })
         })
     }
     res.setHeader('Content-Type','text/html')
     res.write('<html>')
     res.write('<head><title>First Page</title></head>')
     res.write('<body>Hello from Node JS</body>')
     res.write('</html>')
     res.end()
 
}

// module.exports={ //export multiple things
//     handler:requestHandler,
//     someText:'Some hard coded text'
//     }

exports.handler=requestHandler //we can omit module if we write like this 
exports.someText='Some hard coded Text'

    