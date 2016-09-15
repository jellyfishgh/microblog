var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexHandler);
router.get('/index', indexHandler);

function indexHandler(req, res) {
    if (req.session.username) {
        res.render('index', {
            title: 'Express',
            username: req.session.username,
            links: ['index']
        });
    } else {
        res.redirect('../login');
    }
}

module.exports = router;
