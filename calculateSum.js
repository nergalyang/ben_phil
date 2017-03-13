function a() {
	var sum = 0;
	for(var i=0; i<101;i++) {
			sum+=i;
	}
	return sum;
	
}

var k = new Buffer(a().toString(),'utf8');
process.stdout.write(k);
// return '123';