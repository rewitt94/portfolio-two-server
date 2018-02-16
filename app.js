var express = require('express');
var app = express();

app.use(express.static(__dirname + '/frontend_react_app'));
app.use(express.static(__dirname + '/submarine'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/frontend_react_app/index.html')
})

app.get('/submarine',function(req,res){
  res.sendFile(__dirname + '/submarine/submarine.html')
})

// 0 is node binary
// 1 is .js file
// extra stuff starts from 2
const port = parseInt(process.argv[2]) || 4000;

app.listen(port)

console.log(`Running on port ${port}`)
