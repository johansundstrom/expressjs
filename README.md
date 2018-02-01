# expressjs
Det mesta om express.js

Importera och instantiera express

```javascript
var express = require('express');
var app = express();
```

Läsning via HTTP POST används body-parser

```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
```

Skriv en route
```javascript
app.get('/api', function(req, res){
    var id = req.query.n;   //Funkar
    var n = req.body.n;     //funkar
    res.send('<html><body><h1>Johan ' + id + '</h1><p>' + n + '</p><form><input name="n" type="text"><button type="submit">Skicka</button></form></body></html>');
});
``` 

Starta läsning på porten
```javascript
app.listen(3000);
```
