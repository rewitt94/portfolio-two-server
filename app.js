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

app.get('/reversi',function(req,res){
  res.sendFile(__dirname + '/reversi/reversi.html')
})

// 0 is node binary
// 1 is .js file
// extra stuff starts from 2
const port = parseInt(process.argv[2]) || 4000;

app.listen(port)

console.log(`Running on port ${port}`)


// This is the API for the highscores feature of the submarine game

var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('./submarine/leaderboard');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/submarine_load', function(req,res){
  db.all(`
  SELECT * FROM leaderboard
  `, function(err, leaderboard) {
    if (err != null) {
    res.status(500).send('Something broke!');
    }
    res.send(JSON.stringify(leaderboard));
  });
});

app.post('/submarine_add', function(req,res){
  var name = req.body.name;
  var score = req.body.score;
  console.log([name,score]);
  db.run(`INSERT INTO leaderboard
  VALUES ('${name}', ${score})`);
});
