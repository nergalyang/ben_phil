function a() {
	var sum = 0;
	for(var i=0; i<10000;i++) {
		for(var j=0; i<10000;j++) {
			sum+=i;
		}
	}
	return sum;
}
var k = a();
console.log(k);