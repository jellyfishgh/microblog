var express = require('express');
var router = express.Router();
var User = require('../schema/User');

router.get('/:username', function(req, res, next) {
    if (req.session.username) {
        var uname = req.params.username;
        User.find({
            username: uname
        }, function(err, users) {
            if (err || users.length === 0) {
                if (uname === req.session.username) {
                    res.render('personalInfoRegOfMe', {
                        title: uname + ' 需要完善个人信息',
                        username: uname
                    });
                } else {
                    res.render('personalInfoRegOfOther', {
                        title: uname,
                        name: uname
                    });
                }
            } else {
                if (uname === req.session.username) {
                    res.render('personalCenterOfMe', {
                        userInfo: users[0]
                    });
                } else {
                    res.render('personalCenterOfOther', {
                        userInfo: users[0]
                    });
                }
            }
        });
    } else {
        // 登录后仍然访问原来想要访问的url
        res.redirect('../login/:' + req.href);
    }
});

router.post('/', function(req, res, next) {
    var body = req.body;
    User.set({
       username: body.username,
       birthday: new Date(body.birthday),
       sex: true,
       location: {
           province: '',
           city: ''
       } 
    }, function(err){
        
    });
});

module.exports = router;