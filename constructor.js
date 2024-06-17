class List {
	constructor(value, rest) {
		this.value = value;
		this.rest = rest;
	}
	get length() {
		return 1 + (this.rest ? this.rest.length: 0);
	}
	static fromArray(arrray) {
		let result = null;
		for (let i = arrray.length - 1; i >= 0; i--) {
			result = new this(arrray[i], result);
		}
		return result;
	}
}

class LengthList extends List {
	#lenght;

	constructor(value, rest) {
		super(value, rest);
		this.#lenght = super.length;
	}

	get length() {
		return this.#lenght;
	}
}