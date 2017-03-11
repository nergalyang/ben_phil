module.exports = function (_this) {
    if(_this === 'warning') {
    	return 'alert-danger';
    }else if (_this === 'ok') {
    	return 'alert-success';
    }else if (_this === 'info') {
    	return 'alert-danger';
    }
};