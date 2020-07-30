var express = require('express');
var app = express();
var http = require('http');
const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser');
var port = 3000;
var server = http.createServer(app);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(express.static(__dirname + '/dist/SKapp'));

require('./routes/paytm')(app);

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname + '/products.component.html')));

// app.post('/', (req,res) => {
//     res.send("Hello World");
// })

const root = path.join(__dirname, 'dist', 'SKapp');


app.get('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

app.post('*' ,function(req, res) {
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

server.listen(port, () => {
    console.log('Server is starting = ' + port);
});

