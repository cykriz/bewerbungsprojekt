export class FetchingText {
	async fetchFromFile(fileName) {
		const path = `../textFiles/${fileName}.txt`;

		const response = await fetch(path);
		if (!response.ok) {
			console.error(`Die Datei ${fileName}.txt konnte nicht abgefragt werden`);
			return;
		}
		const text = response.text();
		return text;
	}

	async settingUpText(fileName, h = 'h2') {
		if (!fileName) {
			console.error('Bitte Datei zum Abrufen angeben');
			return;
		}

		const text = await this.fetchFromFile(fileName);
		if (!text) {
			return;
		}
		const array = text.split('\n');

		//Lerre Array-Einträge löschen (leere Absätze)
		const cleanArray = array.filter(p => p != '');

		const elements = cleanArray.map(p => {
			if (cleanArray.indexOf(p) === 0) {
				return `<${h}>${p}</${h}>`;
			} else {
				if (p.charAt(0) === '<') {
					return p;
				} else {
					return `<p>${p}</p>`;
				}
			}
		});
		return elements;
	}
}
