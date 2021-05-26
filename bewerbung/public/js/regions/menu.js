const menu = [
	{
		id: 1,
		title: 'Buttermilch Pancakes',
		category: 'Frühstück',
		price: 15.99,
		img: './img/item-01.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus.`,
	},
	{
		id: 2,
		title: 'Diner Double',
		category: 'Mittagstisch',
		price: 13.99,
		img: './img/item-02.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime nesciunt unde.`,
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: './img/item-03.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime.`,
	},
	{
		id: 4,
		title: 'country delight',
		category: 'Frühstück',
		price: 20.99,
		img: './img/item-04.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat.`,
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'Mittagstisch',
		price: 22.99,
		img: './img/item-05.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime nesciunt unde.`,
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: './img/item-06.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus.`,
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'Frühstück',
		price: 8.99,
		img: './img/item-07.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime.`,
	},
	{
		id: 8,
		title: 'american classic',
		category: 'Mittagstisch',
		price: 12.99,
		img: './img/item-08.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime nesciunt unde.`,
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: './img/item-09.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat.`,
	},
	{
		id: 10,
		title: 'bison steak',
		category: 'Abendtisch',
		price: 22.99,
		img: './img/item-10.jpeg',
		desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iusto, fugiat ducimus maxime.`,
	},
];

const menuCenter = document.querySelector('.menu-center');
const btnContainer = document.getElementById('menu-btn-container');

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(item => {
		return `<article class="menu-article">
    <img src="${item.img}" alt="menu-item" class="photo">
    <div class="item-info">
      <header>
        <h3>${item.title}</h3>
        <h3 class="price">${item.price} &euro;</h3>
      </header>
        <p class="item-text">
          ${item.desc}
        </p>
    </div>
  </article>`;
	});

	displayMenu = displayMenu.join('');
	const deMenu = displayMenu.replace(/\.9/g, ',9');
	menuCenter.innerHTML = deMenu;
}

function displayMenuBtns() {
	const categories = menu.map(menuItem => {
		return menuItem.category;
	});

	const uniqueCategories = ['Alles'];

	categories.forEach(category => {
		if (uniqueCategories.indexOf(category) === -1)
			uniqueCategories.push(category);
	});
	const categoryBtns = uniqueCategories
		.map(category => {
			return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
		})
		.join('');
	btnContainer.innerHTML = categoryBtns;
	const filterBtns = document.querySelectorAll('.filter-btn');

	filterBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			const category = e.currentTarget.dataset.id;
			if (category !== 'Alles') {
				const filteredMenu = menu.filter(menuItem => {
					if (menuItem.category === category) return menuItem;
				});
				displayMenuItems(filteredMenu);
			} else {
				displayMenuItems(menu);
			}
		});
	});
}

displayMenuItems(menu);
displayMenuBtns();
