
var index = require("./index")
console.log(index);
index.nameChanger("ryan")

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('hello world')
})
app.post('/api/res', function (req, res, next) {
    console.log(req.body)
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(3000, function(){
    console.log("hi runninf on port 3000");
})