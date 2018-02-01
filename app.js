var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    var id = req.query.n;   //Funkar
    var n = req.body.n;     //funkar
    res.send('<html><body><h1>Johan ' + id + '</h1><p>' + n + '</p><form><input name="n" type="text"><button type="submit">Skicka</button></form></body></html>');
});

app.listen(3000);