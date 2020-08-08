// modules
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conneting the db
mongoose
  .connect('mongodb://localhost/agenda-nodeJs-mongoDB')
  .then(db => console.log('db connected'))
  .catch(err => console.log('type error' + err));

//importing routes
const routes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', routes);

//file static
app.use(express.static(path.join(__dirname, '/public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
