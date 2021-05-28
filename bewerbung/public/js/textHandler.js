import { FetchingText } from './FetchingText.js';

const text = new FetchingText();

const appendText = (htmlElementsArray, selector) => {
	const element = document.querySelector(selector);
	if (!htmlElementsArray) {
		const p = document.createElement('p');
		p.style.textDecoration = 'italic';
		p.innerHTML = '<i>Text konnte nicht abgefragt werden.</i>';
		element.append(p);
	} else {
		htmlElementsArray.forEach(p => {
			element.insertAdjacentHTML('beforeend', p);
		});
	}
};

text.settingUpText('../txt/dieseSeite', 'h3').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#site');
});

text.settingUpText('../txt/javaScript', 'h2').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#boxes div.wrapper div:nth-of-type(1)');
});

text.settingUpText('../txt/nodeJs', 'h2').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#boxes div.wrapper div:nth-of-type(2)');
});

text.settingUpText('../txt/php', 'h2').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#boxes div.wrapper div:nth-of-type(3)');
});

text.settingUpText('../txt/ueber', 'h2').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#about');
});

text.settingUpText('../txt/wuerfel').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#wuerfel-text');
});

text.settingUpText('../txt/bewertungen').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#bewertungen div.wrapper div.flex');
});

text.settingUpText('../txt/registerkarten').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#registerkarten div.title');
});

text.settingUpText('../txt/geschichte', 'h4').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#history');
});

text.settingUpText('../txt/vision', 'h4').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#vision');
});

text.settingUpText('../txt/ziele', 'h4').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'div#ziele');
});

text.settingUpText('../txt/blindtext').then(htmlElementsArray => {
	appendText(htmlElementsArray, 'section#blindtext div.flex');
});

text.settingUpText('../txt/impressum').then(htmlElementsArray => {
	appendText(htmlElementsArray, '#impressum > div.back-content');
});

text.settingUpText('../txt/datenschutz').then(htmlElementsArray => {
	appendText(htmlElementsArray, '#datenschutz > div.back-content');
});
