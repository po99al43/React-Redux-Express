var express = require('express');
var router = express.Router();

router.get('/life', function (req, res, next) {
    res.render('life/index', {
        title: 'Component LifeCycle',
    });
});

router.get('/redux', function (req, res, next) {
    res.render('redux/index', {
        title: 'Redux',
    });
});
module.exports = router;
