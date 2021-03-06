var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var expressHbs = require("express-handlebars");

var index = require('./routes/index');

var app = express();

// view engine setup
app.engine(".hbs", expressHbs({
	defaultLayout: "layout",
	extname: ".hbs",
}));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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

console.log("====================================");
console.log("Server is live at localhost:3000");
console.log("====================================");
console.log("");
