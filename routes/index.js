var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',staff:data ,path: req.path});
});
router.get('/aboutUs', function(req, res, next) {
  res.render('about',{path: req.path});
});
router.get('/videos', function(req, res, next) {
  res.render('allVideos',{path: req.path});
});
router.get('/contact', function(req, res, next) {
  res.render('contact',{path: req.path});
});

module.exports = router;
