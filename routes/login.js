/**
 * Created by yubo on 16/8/4.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(0);
    res.render('login', { title: 'login' });
});

module.exports = router;
