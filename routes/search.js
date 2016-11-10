const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var q = req.query.q;
    var result = [];
    fs.readdir(path.join(__dirname, './../public/html'), (err, files) => {
        if(err) throw err;
        files.map((file) => {
            if(q && file.indexOf(q) !== -1) result.push(file);
        });
        // 模拟请求阻塞超时
        // var now = new Date().getSeconds();
        // while(new Date().getSeconds() - now < 3);
        setTimeout(function(){
            res.json(result);
        }, 3000);
    });
});

module.exports = router;