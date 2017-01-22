function a() {
	var sum = 0;
	for(var i=0; i<10000;i++) {
		for(var i=0; i<10000;i++) {
			sum+=i;
		}
	}
	return sum;
}
var k = a();
exports = k;