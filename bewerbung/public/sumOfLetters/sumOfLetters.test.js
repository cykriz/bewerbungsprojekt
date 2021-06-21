import { sumOfLetters } from './sumOfLetters.js';

// Unit-tests:

export const simon = sumOfLetters('Simon', 70);

export const a = test('A', 1);
export const z = test('Z', 26);
export const az = test('Az', 27);
export const testString = test('Test', 64);
export const te_st = test('Te st', 64);
export const ivan = test('Ivan', 46);

export const nonEng1 = testNonEnglishCharactersAreSkipped('üöä€çßß', 0);
export const nonEng2 = testNonEnglishCharactersAreSkipped('Möbel', 32);

export const caseSens1 = testUppercaseAndLowercaseAreEqual('AAA', 'aaa');
export const caseSens2 = testUppercaseAndLowercaseAreEqual('AaaA', 'aAAa');

export const spaceSkip1 = spaceIsSkipped('te st', 'test');
export const spaceSkip2 = spaceIsSkipped('t e s t', 'test');

export const nonStr1 = testNonStrAreSkipped(
	{ name: 'John', hoby: 'Coding' },
	0
);
export const nonStr2 = testNonStrAreSkipped(0.678, 0);

function test(name, expect) {
	const output = sumOfLetters(name);
	let result = false;
	if (output === expect) result = true;
	return result;
}

function testNonEnglishCharactersAreSkipped(name, expect) {
	return test(name, expect);
}

function testNonStrAreSkipped(name, expect) {
	return test(name, expect);
}

function spaceIsSkipped(nameWithSpace, nameWithoutSpace) {
	return sumOfLetters(nameWithSpace) === sumOfLetters(nameWithoutSpace);
}

function testUppercaseAndLowercaseAreEqual(uppercasName, lowercaseName) {
	return sumOfLetters(uppercasName) === sumOfLetters(lowercaseName);
}
