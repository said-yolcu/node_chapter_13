var http = require('http')

var options = {
    host: 'www.google.com'
    , port: 80
    , path: '/upload'
    , method: 'POST'
}

var request= http.request(options, res => {
    console.log('STATUS: ', res.statusCode)
    console.log('HEADERS: ', res.headers)
    res.setEncoding('utf8')
    res.on('data', chunk => {
        console.log(`BODY: ${chunk}`)
    })
})

request.write('This is a piece of data \n')
request.write('This is another piece of data \n')
request.end()