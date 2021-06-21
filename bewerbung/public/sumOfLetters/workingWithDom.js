import { sumOfLetters } from './sumOfLetters.js';

import {
	simon,
	a,
	z,
	az,
	testString,
	te_st,
	ivan,
	nonEng1,
	nonEng2,
	caseSens1,
	caseSens2,
	spaceSkip1,
	spaceSkip2,
	nonStr1,
	nonStr2,
} from './sumOfLetters.test.js';

const body = document.querySelector('body');

// Showing results of testing functions:

const sumOfMyName = document.getElementById('sum-of-my-name');
sumOfMyName.innerText = simon;

const spanA = document.getElementById('sum-of-a');
spanA.innerText = a;

const spanZ = document.getElementById('sum-of-z');
spanZ.innerText = z;

const spanAz = document.getElementById('sum-of-az');
spanAz.innerText = az;

const spanTest = document.getElementById('sum-of-testString');
spanTest.innerText = testString;

const spanTe_st = document.getElementById('sum-of-te_st');
spanTe_st.innerText = te_st;

const spanIvan = document.getElementById('sum-of-ivan');
spanIvan.innerText = ivan;

const spanNonEng1 = document.getElementById('sum-of-nonEng1');
spanNonEng1.innerText = nonEng1;

const spanNonEng2 = document.getElementById('sum-of-nonEng2');
spanNonEng2.innerText = nonEng2;

const spanCaseSens1 = document.getElementById('sum-of-caseSens1');
spanCaseSens1.innerText = caseSens1;

const spanCaseSens2 = document.getElementById('sum-of-caseSens2');
spanCaseSens2.innerText = caseSens2;

const spanSpaceSkip1 = document.getElementById('sum-of-spaceSkip1');
spanSpaceSkip1.innerText = spaceSkip1;

const spanSpaceSkip2 = document.getElementById('sum-of-spaceSkip2');
spanSpaceSkip2.innerText = spaceSkip2;

const spanNonStr1 = document.getElementById('sum-of-nonStr1');
spanNonStr1.innerText = nonStr1;

const spanNonStr2 = document.getElementById('sum-of-nonStr2');
spanNonStr2.innerText = nonStr2;

// User input:

const showSumBtn = document.getElementById('showSumBtn');
const inputName = document.getElementById('input');

inputName.addEventListener('keydown', e => {
	if (e.code === 'Enter') outPutNameAndSumHandler();
});

showSumBtn.addEventListener('click', e => {
	e.preventDefault;
	outPutNameAndSumHandler();
});

function outPutNameAndSumHandler() {
	const inputName = document.getElementById('input').value;
	const result = sumOfLetters(inputName);

	const pResult = document.getElementById('result');

	pResult.innerHTML = `The sum of the word "${inputName}" is: ${result}`;
	window.scrollTo(0, document.body.scrollHeight);
}
