class SecretiveObject {
	#getSecret() {
		return "I ate all the plums";
	}
	interrogate() {
		let shallSayIt = this.#getSecret();
		return "never";
	}
}