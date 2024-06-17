function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("oh my fur and whiskers");
hungryRabbit.speak("Got any carrots?");
speak.call(whiteRabbit, "Hurry");