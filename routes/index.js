var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Sunny', age: 22 },
    { id: 3, name: 'Loe', age: 24 },
  ]
  console.log(data)
  res.render('index', { title: 'Express',staff:data });
});

module.exports = router;
