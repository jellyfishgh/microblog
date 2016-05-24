var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', indexHandler);
router.get('/index', indexHandler);

function indexHandler(req, res, next) {
    if (req.session.logined) {
        db.redisSelect('sql', function(username) {
            res.render('index', {
                title: 'Express',
                username: username,
                links: ['index']
            });
        });
    } else {
        res.redirect('../login');
    }
}

module.exports = router;