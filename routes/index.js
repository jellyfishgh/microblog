var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexHandler);
router.get('/index', indexHandler);

function indexHandler(req, res, next) {
    if (req.session.logined) {
        res.render('index', {
            title: 'Express',
            links: ['index']
        });
    } else {
        res.redirect('../login');
    }
}

module.exports = router;
