const http = require('http')
const calc = require('./calc.js')

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type': 'text/html'})
    if(req.url === '/'){
        let some = calc.add(1,3)
        res.write(String(some))
    }else{
        res.write("404")
    }
    res.end()
}).listen(80)

console.log("listening to 80")
