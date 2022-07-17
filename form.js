var request = require('request')
var inspect = require('util').inspect

body = {
    a: 1
    , b: 2
}

var options = {
    url: 'http://localhost:4001/print/body'
    //, form: body
    // we can json encode body, rather than from encoding
    , json: body
    //, jar: false/true/specific_jar
    /*
    This jar property administers cookies related to this request
    */
}

request(options, (err, res, body) => {
    if (err) { throw err }
    console.log(inspect({
        err: err
        , res: {
            statusCode: res.statusCode
            , headers: res.headers
        }
        , body: JSON.parse(body)
    }))
})