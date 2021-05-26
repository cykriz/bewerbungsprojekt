const reviews = [
	{
		id: 1,
		name: 'Peter Müller',
		job: 'Web Developer',
		img: 'https://randomuser.me/api/portraits/men/1.jpg',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aspernatur animi, adipisci doloremque maxime eveniet dicta quibusdam! Repellendus sint reprehenderit consequuntur ullam quasi accusantium incidunt?',
	},
	{
		id: 2,
		name: 'Anna Schmidt',
		job: 'Web Designer',
		img: 'https://randomuser.me/api/portraits/women/0.jpg',
		text:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi labore at quidem libero? Odit, veritatis! Nisi sunt facere inventore minus?',
	},
	{
		id: 3,
		name: 'Klaus Peter',
		job: 'Intern',
		img: 'https://randomuser.me/api/portraits/men/7.jpg',
		text:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio laborum, quas assumenda ipsa eos consequatur id reprehenderit, voluptatum magnam praesentium consectetur accusamus provident?',
	},
	{
		id: 4,
		name: 'Gerda Klein',
		job: 'Geschäftsführung',
		img: 'https://randomuser.me/api/portraits/women/4.jpg',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique ducimus veniam suscipit blanditiis fugiat tenetur sequi, perspiciatis tempora, animi ut!',
	},
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

const showPerson = person => {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
};

window.addEventListener('DOMContentLoaded', () => {
	showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

nextBtn.addEventListener('click', () => {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

const showRandom = () => {
	const newItem = Math.floor(Math.random() * reviews.length);
	console.log('New item is: ' + newItem);

	if (newItem === currentItem) {
		showRandom();
		return;
	} else {
		currentItem = newItem;
		showPerson(currentItem);
	}
};

randomBtn.addEventListener('click', () => {
	showRandom();
});
