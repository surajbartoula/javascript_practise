let numbers = [15, 36, 67, 45, 48, 37, 1, 5, 3, 10, 19, 21, 27, 9, 0, 4, 62, 94, 100];

numbers.sort(function(a, b) {
    return a - b;
});

numbers.forEach((number, index) => {
	console.log(`${number} ${index + 1 }`)
})
