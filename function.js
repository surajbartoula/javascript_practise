function printZeroPaddingWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs, goats) {
	printZeroPaddingWithLabel(cows, "Cows");
	printZeroPaddingWithLabel(chickens, "Chickens");
	printZeroPaddingWithLabel(pigs, "Pigs");
	printZeroPaddingWithLabel(goats, "Goats");
}
printFarmInventory(7, 11, 3, 5);