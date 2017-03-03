module.exports = function (req, res, next) {
	const exec = require('child_process').exec;
	//传入图片地址作为参数， 那返回给我的就是新的图片地址和参数咯？

	exec('node /Users/NadesicoY/Desktop/ben_phil/calculateSum.js', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  res.send(stdout);
	  console.log('=====',stdout);
	});
};