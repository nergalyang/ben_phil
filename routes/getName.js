var express = require('express');
var router = express.Router();

// API
router.get('/getBen', function(req, res, next) {
  res.json({ name: 'ben',age:'31'});
});
router.get('/getPhil', function(req, res, next) {
  res.json({ name: 'phil',age:'13'});
});
module.exports = router;