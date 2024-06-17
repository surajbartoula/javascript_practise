let finder = {
	find(arrray) {
		return arrray.some(v => v == this.value);
	},
	value: 5
};
console.log(finder.find([4, 5]));