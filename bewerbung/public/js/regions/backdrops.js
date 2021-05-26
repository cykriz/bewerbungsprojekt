const impressumLink = document.getElementById('impressum-link'),
	backdrop = document.getElementById('backdrop'),
	impressum = document.getElementById('impressum'),
	body = document.querySelector('body'),
	datenschutz = document.querySelector('#datenschutz'),
	datenschutzLink = document.querySelector('#datenschutz-link'),
	blogBtn = document.getElementById('blog-btn'),
	blog = document.getElementById('blog'),
	coronaBtn = document.getElementById('corona-btn'),
	corona = document.getElementById('corona');

const toggle = target => {
	backdrop.classList.toggle('visible');
	target.classList.toggle('visible');
	body.classList.toggle('overflow-hidden');
};

impressumLink.addEventListener('click', event => {
	event.preventDefault();
	toggle(impressum);
});

datenschutzLink.addEventListener('click', event => {
	event.preventDefault();
	toggle(datenschutz);
});

blogBtn.addEventListener('click', event => {
	event.preventDefault;
	toggle(blog);
});

coronaBtn.addEventListener('click', event => {
	event.preventDefault;
	const iframe = document.createElement('iframe');
	iframe.src = 'https://heim.cykriz.de/corona';
	corona.insertAdjacentElement('afterbegin', iframe);
	toggle(corona);
	return iframe;
});

blog.addEventListener('click', () => {
	toggle(blog);
});

impressum.addEventListener('click', () => {
	toggle(impressum);
});

datenschutz.addEventListener('click', () => {
	toggle(datenschutz);
});

corona.addEventListener('click', () => {
	toggle(corona);
	const iframe = corona.querySelector('iframe');
	iframe.remove();
});
