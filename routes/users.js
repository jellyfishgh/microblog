var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.session.lastPage) {
        console.log('session users');
        res.send('lastPage: ' + req.session.lastPage);
    } else {
        req.session.lastPage = '/users';
        res.send('respond with a resource');
    }
});

module.exports = router;