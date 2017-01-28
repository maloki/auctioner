const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/'))

app.get('/', function(req, res, next){
  res.render('index.html');
});

server.listen(3000, function(){
  console.log("server listening on port 3000");
 });
