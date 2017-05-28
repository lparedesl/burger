var express = require('express');
var router = express.Router();
var burger = require('../models/burger');
var moment = require('moment');

router.get('/', function(req, res, next) {
    burger.selectAll(function(burgers) {
        var devoured = [];
        var nonDevoured = [];
        for (var i = 0; i < burgers.length; i++) {
            if (burgers[i].devoured === 1) {
                devoured.push(burgers[i]);
            } else {
                nonDevoured.push(burgers[i]);
            }
        }
        res.render('index', {
            devoured: devoured,
            nonDevoured: nonDevoured
        });
    });
});

router.post('/addburger', function(req, res) {
    burger.insertOne({
        burger_name: req.body.burger_name,
        devoured: false,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }, function() {
        res.redirect('/');
    });
});

router.post('/devour', function(req, res) {
    var condition = 'id = ' + req.body.id;
    burger.updateOne({
        devoured: true,
    }, condition, function() {
        res.redirect('/');
    });
});

module.exports = router;
