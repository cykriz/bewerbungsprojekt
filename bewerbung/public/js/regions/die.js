const UPPER_BOUND = 6,
	hex = [3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
	die = document.querySelector('div.die'),
	span = document.querySelector('div div.die');

const newDigit = event => {
	const p = document.querySelector('div div.die p');
	let random = Math.floor(Math.random() * UPPER_BOUND) + 1;
	let hexColor = '#';

	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}

	let COUNT = 0;
	const COUNT_END = 30;
	const TIME = 40;
	const interval = setInterval(() => {
		let random = Math.floor(Math.random() * UPPER_BOUND) + 1;
		p.textContent = random;
		span.style.fontSize = '1.7em';
		COUNT++;
		if (COUNT === COUNT_END) {
			clearInterval(interval);
			span.style.textShadow = '0 0 5rem white';
			if (event === 'Enter') p.textContent = '6';
			span.style.backgroundColor = hexColor;
		}
	}, TIME);
};

die.addEventListener('click', newDigit);
document.addEventListener('keydown', e => {
	if (e.code === 'Space') newDigit(e.code);
	if (e.code === 'Enter') newDigit(e.code);
});

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
