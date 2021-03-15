var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var locationsRouter = require('./routes/locations');
var servicesRouter = require('./routes/services');
var availabilitiesRouter = require('./routes/availabilities');
var appointmentsRouter = require('./routes/appointments');
const dbHelpers = require('./helpers/dbHelpers')(db);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/locations', locationsRouter(dbHelpers));
app.use('/api/services', servicesRouter(dbHelpers));
app.use('/api/availabilities', availabilitiesRouter(dbHelpers));
app.use('/api/appointments', appointmentsRouter(dbHelpers));
console.log("test");
module.exports = app;
