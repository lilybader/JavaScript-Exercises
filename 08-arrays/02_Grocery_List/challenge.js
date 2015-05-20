module.exports.addItem = function(item, array) {
	if (array.indexOf(item)) {
		array.push(item);
		return array;
	}
	else {
		return array;
	}
};

module.exports.reverseSortedList = function(array) {
	array.sort().reverse();
	return array;
};
