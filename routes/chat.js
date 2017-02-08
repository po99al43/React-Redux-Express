var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('chat/index', {
        title: 'Express',
        // js: { 'board': 'main' },
        css: { 'chat': 'chat' }
    });
});

module.exports = router;
