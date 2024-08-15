var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usuariosRouter = require('./routes/usuarios');
var tarjetasRouter = require('./routes/tarjetas');
var domiciliosRouter = require('./routes/domicilios');
var fotosRouter = require('./routes/fotos');
var carritosRouter = require('./routes/carritos');
var restUsuarios = require('./rest/usuarios');
var restTarjetasRouter = require('./rest/tarjetas');
var restDomiciliosRouter = require('./rest/domicilios');
var restCarritosRouter = require('./rest/carritos');

var fotosRouter = require('./routes/fotos');
var restRouter = require('./rest/fotos');




var app = express();
var cors = require('cors'); // cors permite que se puedan hacer peticiones desde cualquier origen a nuestra API
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usuarios', usuariosRouter);
app.use('/tarjetas', tarjetasRouter);
app.use('/domicilios', domiciliosRouter);
app.use('/rest/usuarios', restUsuarios);
app.use('/rest/tarjetas', restTarjetasRouter);
app.use('/rest/domicilios', restDomiciliosRouter);
app.use('/rest/carritos', restCarritosRouter);
app.use('/carritos', carritosRouter);

app.use('/fotos', fotosRouter);
app.use('/rest/fotos', restRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
