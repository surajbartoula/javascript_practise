const person = {
	fullName: function(city, country) {
		return this.firstName + " " + this.lastName + ", " + city + ", " + country;
	}
}

const suraj = {
	firstName: "Suraj",
	lastName: "Bartoula"
}
const identity = person.fullName.call(suraj, "Kathmandu", "Nepal");
console.log(identity);