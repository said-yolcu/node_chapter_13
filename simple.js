var request = require('request')
var inspect = require('util').inspect

var options={
    url: 'http://localhost:4001/redirect'
    // when follow redirect is set false, going to the 
    // url: '/redirect' returns an error
    ,followRedirect: false
    // method is implicitly GET but can be another method
    // ,method: 'GET' 
}

request(
    options,

    (err, res, body) => {
        if (err) { throw err }
        console.log(inspect({
            err: err,
            res: {
                statusCode: res.statusCode
            },
            body: JSON.parse(body)
        }))
    }
)