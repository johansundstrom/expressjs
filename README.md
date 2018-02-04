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

var n = req.body.n;     //funkar
```

Läsning via HTTP GET kräver ingen ytterligre import

```javascript 
var id = req.query.n;   //Funkar
```

Skriv en route
```javascript
app.get('/api', function(req, res){
    res.send('<html><body><h1>Johan</h1></body></html>');
});
``` 

Starta läsning på porten
```javascript
app.listen(3000);
```
