var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: "This is YiFan's Contacts APP(File Edition)", name: 'visitors'});
});

module.exports = router;
