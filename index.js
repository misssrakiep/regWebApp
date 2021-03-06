var http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('router');
// const flash = require('express-flash');
// const session = require('express-session');

const RegNum = require('./regNum');
const Models = require('./models');

const models = Models(process.env.MONGO_DB_URL ||'mongodb://localhost:27017/regNumbers');
const mongoose = require('mongoose');
const regNum = RegNum(models);

// instance of express
const app = express();

// app.helper('each', require('handlebars-helper-each'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse the application
app.use(bodyParser.json());

//app routes start here

app.get('/', regNum.index);
app.get('/add', regNum.addReg);
app.post('/add', regNum.addReg);
app.get('/view', regNum.viewScreen);
app.post('/view', regNum.viewScreen);




const port = process.env.PORT || 3006;
app.listen(port, function(){
  console.log('App has started on port: ' + port);
});
app.set('port', process.env.PORT ||  port);
