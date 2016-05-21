var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'login'
    });
});

router.post('/', function(req, res, next){
    console.log(req.username);
});

module.exports = router;
