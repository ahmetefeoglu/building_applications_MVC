var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require("stylus");
var nib = require("nib");

var routes = require('./routes/all');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(stylus.middleware({
  //if we move the file, we want the relative path to stay the same so we
  //use path module
  src: path.join(__dirname, "public"),
  compile: function(str, p) {

    // As we want to use Nib, after setting our files we include nib(it has functions o handle crossbrowser things) also
    return stylus(str).set("filename", p).use(nib());
  }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//setting up a basedir so our mixins can render properly
app.locals.basedir = path.join(__dirname, "views");

//Using stylus

//Using middleware to connect stylus to our app

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
