var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/media', express.static(__dirname + '/media'));

app.use(express.static(__dirname + '/public'));

app.get('/api', function(req, res){
    var id = req.query.id;   //Funkar
    var eName = req.body.n;     //funkar
    res.send('<html><body><p>[ <a href="/">start</a> | <a href="/api">post</a> | <a href="/api">get</a> ]</a></p><h1>Johan ' + id + '</h1><p>' + eName + '</p><form><input name="n" type="text"><button type="submit">Skicka</button></form></body></html>');
});

app.listen(3000);