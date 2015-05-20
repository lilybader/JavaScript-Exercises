module.exports.reversePlusOne = function(array) {
	var plusOneArray = array.reverse();
	plusOneArray.unshift(1);
	return plusOneArray;
};

module.exports.plusesEverywhere = function(array) {
	var plusesEverywhereArray = array.join('+');
	plusesEverywhereArray.toString();
	return plusesEverywhereArray;
};

module.exports.arrayQuantityPlusOne = function(array) {
	var arrayQuantityPlusOneArray = array.length + 1;
	return arrayQuantityPlusOneArray;
};
