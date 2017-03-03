var express = require('express');
var router = express.Router();
var calculate = require('./calSum/calculate.js');

// API
router.get('/getBen', function(req, res, next) {
  res.json({ name: 'ben',age:'31'});
});
router.get('/getPhil', function(req, res, next) {
  res.json({ name: 'phil',age:'13'});
});
router.get('/getChildProcess', calculate);
module.exports = router;