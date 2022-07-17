require('http').createServer((req,res) => {
    function printBack() {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end(JSON.stringify({
            url: req.url,
            method: req.method,
            headers: req.headers
        }))
    }

    switch(req.url){
        case'/redirect':
            // status code of the address that we are  
            // redirected-to is printed
            res.writeHead(301, {'Location': '/'})
            res.end()
            break;

        case'/print/body':
            res.writeHead(302, {'Content-Type': 'text/plain'})
            req.setEncoding('utf8')
            var body= ''
            req.on('data', d => {
                body += d
            })
            req.on('end', () => {
                res.end(JSON.stringify(body))
            })
            break;
            
        default:
            printBack()
            break;
    }
}).listen(4001)