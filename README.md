# expressjs
Det mesta om express.js

Importera och instantiera express

```javascript
var express = require('express');
var app = express();
```

Utläsning av HTTP POST används body-parser

```javascript
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var n = req.body.n;     //funkar
```

Utläsning av HTTP GET kräver ingen ytterligre import

```javascript 
var id = req.query.n;   //Funkar
```

Skriv en route
```javascript
app.get('/api', function(req, res){
    res.send('<html><body><h1>Johan ' + n + '</h1><form><input type="text"></input><button></button></form></body></html>');
});
``` 

Starta läsning på porten
```javascript
app.listen(3000);
```
