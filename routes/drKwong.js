var express = require('express');
var router = express.Router();

/* GET drKwong page. */
router.get('/', function(req, res, next) {
    res.render('drKwong', { title: 'Dr. K. Kwong' });
});

module.exports = router;
