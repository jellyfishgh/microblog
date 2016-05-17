var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexHandler);
router.get('/index', indexHandler);

function indexHandler(req, res, next) {
    if (req.session.lastPage) {
        console.log('session:index');
        res.send('lastPage: ' + req.session.lastPage);
    } else {
        req.session.lastPage = '/index';
        res.render('index', {
            title: 'Express',
            links: ['index', 'users']
        });
    }
}

module.exports = router;