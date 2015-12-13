// load the things we need
var express = require('express');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use('/', require('./controllers'))

//set the view engine to ejs
var path = require('path');
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'ejs');

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// module.exports = app;

/**
 * Start Server
 */

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('server listening on %d', server.address().port)
})