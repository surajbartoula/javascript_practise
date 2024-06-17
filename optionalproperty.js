function city(object) {
	return object.address?.city;
}

console.log(city({address: {city: "Toronto"}}));
console.log(city({name: "Vera"}));

const value1 = obj.prop1.prop2.prop3; //gives error if any property is not defined.

const value2 = obj?.prop1?.prop2?.prop3;  //No error, value2 is undefined if any intermediate property is undefined.

