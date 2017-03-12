var calendar = require ('../../lib/lunarDate.js');
module.exports = function (_this) {
	var year = _this.slice(0,4);
	var month = _this.slice(5,7);
	var day = _this.slice(8,10);
	var result = calendar.solar2lunar(year,month,day);
	return result.gzYear+'年 '+result.gzMonth+' '+ result.gzDay+'   '+result.ncWeek;
};