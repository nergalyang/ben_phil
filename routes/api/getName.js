var express = require('express');
var router = express.Router();

// API
router.get('/getBen', function(req, res, next) {
  res.json({ name: 'ben',age:'31'});
});
router.get('/getPhil', function(req, res, next) {
  res.json({ name: 'phil',age:'13'});
});
router.get('/getChildProcess', function (req, res, next) {
	const exec = require('child_process').exec;
	//传入图片地址作为参数， 那返回给我的就是新的图片地址和参数咯？
	exec('node ./calculateSum.js', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  console.log('=====',stdout);
	});
});
module.exports = router;