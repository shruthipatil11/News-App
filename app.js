var createError = require('http-errors');
var express = require('express');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/news');
var searchNews = require('./routes/searchNews');

var app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', indexRouter);
app.use('/news', usersRouter);
app.use('/searchNews', searchNews);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
