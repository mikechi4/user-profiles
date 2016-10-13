//Dependencies
var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 3000;
var config = require('./config')
var corsOptions = {
  origin: 'http://localhost:3000'
}
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(expressSession({secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'))
console.log('DIIIIIIRNAAME: ' + __dirname)

app.post('/api/login', userCtrl.login );
app.get('/api/profiles', profileCtrl.getFriends);

app.listen(port, function(){
  console.log('connected to port ' + port + "...");
})
