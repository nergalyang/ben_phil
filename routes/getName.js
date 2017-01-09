var express = require('express');
var router = express.Router();

// API
router.get('/getName', function(req, res, next) {
  res.json({ name: 'ben',age:'31'});
});
module.exports = router;