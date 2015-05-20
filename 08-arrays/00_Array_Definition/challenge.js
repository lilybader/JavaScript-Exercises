module.exports.newArray = function(a, b, c, d) {
	var array = [a, b, c, d];
	return array;
};

module.exports.firstAndLast = function(array) {
	var firstAndLastArray = [array.shift(), array.pop()];
	return firstAndLastArray;
};
