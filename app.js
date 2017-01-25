var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to database.');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/new', function(req, res){
	res.render('new');
});

var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log ('Server started on port ' + port);
});
