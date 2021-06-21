// Sum of all letters app

export function sumOfLetters(name) {
	let sum = 0;

	if (typeof name === 'string') {
		name = name.toLowerCase();
		for (let i = 0; i < name.length; i++) {
			if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
				const numberToAdd = name.charCodeAt(i) - 96;
				sum += numberToAdd;
			}
		}
	}

	return sum;
}
