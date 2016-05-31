var express = require('express');
var router = express.Router();
var User = require('../schema/User');

router.get('/:username', function(req, res, next) {
    if (req.session.username) {
        var uname = req.username;
        User.find({
            username: uname
        }, function(err, users) {
            if (err || users.length === 0) {
                if (uname === req.session.username) {
                    res.render('personalInfoReg', {
                        title: uname + '需要完善个人信息',
                        name: uname
                    });
                } else {

                }
            } else {
                if (uname === req.session.username) {
                    res.render('personalCenter', {
                        userInfo: users[0]
                    });
                } else {

                }
            }
        });
    } else {
        // 登录后仍然访问原来想要访问的url        
        res.redirect('../login/:' + req.href);
    }
});

router.post('/', function() {

});

module.exports = router;