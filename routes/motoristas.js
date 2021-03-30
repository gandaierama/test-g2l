var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('list');
});


/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('add');
});


/* GET users listing. */
router.get('/edit', function(req, res, next) {
  res.send('edit');
});


/* GET users listing. */
router.get('/delete', function(req, res, next) {
  res.send('delete');
});

module.exports = router;
