var bodyParser = require('body-parser')
var router = require('express').Router()

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

// 
router.use('/api', require('./api'))
router.use('/', require('./static'))

module.exports = router
