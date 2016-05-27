var express = require('express');
var router = express.Router();
var User = require('../User');

router.get('/', function(req, res, next) {
    var uname = req.session.username;
    User.find({username: uname}, function(err, users){
        if(err || users.length === 0){
            res.render('personalInfoReg', {
                title: uname + '需要完善个人信息',
                name: uname
            });
        }else{
            res.render('personalCenter', {
                userInfo: users[0]
            });
        }
    });
});

router.post('/', function() {

});

module.exports = router;