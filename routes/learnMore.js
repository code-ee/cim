var express = require('express');
var fs = require('fs');
var jade = require('jade');
var router = express.Router();

/* GET Learn More page. */
router.get('/', function(req, res, next) {
    var content = 'aboutUs';
    if (req.query.content) {
        content = req.query.content;
    }
    res.render('learnMore', { title: 'Learn More', content: content});
});

// rest endpoint fetches the jade template, converts to html, then sends to page
router.get('/REST/getHTML', function(req, res, next) {
    //debugging
    if (req.query.path) {
        console.log(req.query.path);
    }

    var jadeFile = __dirname + '/../views/templates/learnMore/' + req.query.path + req.query.file + '.jade';
    fs.readFile(jadeFile, 'utf8', function(err, str){
        if (err) {
            throw err;
        }
        var fn = jade.compile(str, { filename: jadeFile, pretty: true });
        var html = fn();
        res.send({html: html});
    });
});

module.exports = router;
