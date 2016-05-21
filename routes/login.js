var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'login'
    });
});

router.post('/', function(req, res, next){
    var body = req.body;
    var username = body.username,
        password = body.password;
    console.log(username, password);
    res.end('success');        
});

module.exports = router;
