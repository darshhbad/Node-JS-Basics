const http = require ('http')
const routes=require('./Task_9')
const server=http.createServer(routes.handler)
//Task_9 can't be accessed from here by routes.method functions
console.log(routes.someText)
server.listen(4000);