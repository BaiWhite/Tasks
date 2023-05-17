// 1.1 import http
const http = require('http')

// 1.2 import fs
const fs = require('fs')

// 1.3 import path
const path = require('path')

// 2.1 create web server
const server = http.createServer()

// 2.2 listen to request request
server.on('request', function (req, res) {
    // 3.1 get client request url address
    let url = req.url
    if (url === '/') {
        url = '/index.html'
    }

    //3.2 map URL address with file address
    const fpath = path.join(__dirname, './web', url)

    //4.1 read file path based on maped address
    fs.readFile(fpath, 'utf8', (err, dataStr) =>{
        
        // 4.2 read fail
        if (err) return res.end('404 Not found.')
        
        // 4.3 read success
        res.end(dataStr)
    })
})

// 4. Start Server
server.listen(8080, function (){
    console.log('server running at http://127.0.0.1:8080')
})