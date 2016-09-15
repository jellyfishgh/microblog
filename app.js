const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const bodyParser = require('body-parser');
const uuid = require('node-uuid');

const config = require('./config.json');

const index = require('./routes/index');
const login = require('./routes/login');
const register = require('./routes/register');
const personalCenter = require('./routes/personalCenter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    store: new RedisStore({
        host: config.redis.host,
        port: config.redis.port,
        ttl: 24 * 60 * 60 // session 有效期 1 天
    }),
    genid: function() {
        return uuid.v1();
    },
    secret: 'jellyfish',
    cookie: {
        // maxAge: 30 * 60, //cookie 有效期 30 分钟
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req, res, next) {
//     if (req.session.username) {
//         next();
//     } else {
//         res.redirect('../login');
//     }
// });

app.use('/', index);
app.use('/login', login);
app.use('/register', register);
app.use('/personalCenter', personalCenter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
