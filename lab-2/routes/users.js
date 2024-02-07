var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send("It's not live yet. Stay tuned.");
});

module.exports = router;
