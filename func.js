const square = function(x) {
	return x * x;
};

console.log(square(12));

const makeNoise = function() {
	console.log("Pling!");
};
makeNoise();

const roundTo = function(n, steps) {
	let remainder = n % steps;
	return n - remainder + (remainder < steps / 2 ? 0 : steps);
};
console.log(roundTo(23, 10));