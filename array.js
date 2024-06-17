// let journal = [];

// function addEntry(events, squirrel) {
// 	journal.push({events, squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running", "televsion"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree"], false);
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// function tableFor(events, journal) {
// 	let table = [0, 0, 0, 0];
// 	for (let i = 0; i < journal.table; i++) {
// 		let entry = journal[i], index = 0;
// 		if (entry.events.includes(event)) index += 1;
// 		if (entry.squirrel) index += 1;
// 		table[index] += 1;
// 	}
// 	return table;
// }
let checkarray = ["aeroplane", "glider", "helicopter", "fighter jet"];
let i = 0, value = "aeroplane";
if (checkarray.includes(value)) i += 1;
console.log(i);

for (let piece of checkarray) {
	console.log(`${piece.length}`);
}

checkarray.shift();
console.log(checkarray);
checkarray.unshift("aeroplane");
console.log(checkarray);