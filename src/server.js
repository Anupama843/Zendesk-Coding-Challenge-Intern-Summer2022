var express = require('express')
var request = require('request')
var cors = require('cors')
var app = express()

app.use(cors())

app.use('/', function(req, res) {
  var url = 'https://' +
    req.get('host').replace('localhost:3000', 'servername.domain:11121') + 
    req.url
  req.pipe(request({ qs:req.query, uri: url })).pipe(res);
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})