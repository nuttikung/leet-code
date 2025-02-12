// TODO: fn Divider reuseable
const divide = (a, b) => Math.floor(a / b);

// TODO: fn compose String by n times
const compose = (s, n) => {
	const array1 = new Array(n);
	return array1.fill(s, 0, n).join("");
};
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let romanNumbers = [
		{
			sign: "M",
			amount: 0,
			value: 1000,
		},
		{
			sign: "CM",
			amount: 0,
			value: 900,
		},
		{
			sign: "D",
			amount: 0,
			value: 500,
		},
		{
			sign: "CD",
			amount: 0,
			value: 400,
		},
		{
			sign: "C",
			amount: 0,
			value: 100,
		},
		{
			sign: "XC",
			amount: 0,
			value: 90,
		},
		{
			sign: "L",
			amount: 0,
			value: 50,
		},
		{
			sign: "XL",
			amount: 0,
			value: 40,
		},
		{
			sign: "X",
			amount: 0,
			value: 10,
		},
		{
			sign: "IX",
			amount: 0,
			value: 9,
		},
		{
			sign: "V",
			amount: 0,
			value: 5,
		},
		{
			sign: "IV",
			amount: 0,
			value: 4,
		},
		{
			sign: "I",
			amount: 0,
			value: 1,
		},
	];
	let total = num;
	return romanNumbers.reduce((accumulator, current) => {
		const amount = divide(total, current.value);
		if (amount === 0) {
			return accumulator;
		} else {
			total = total - amount * current.value;
			const signText = compose(current.sign, amount);
			return accumulator + signText;
		}
	}, "");
};

let start = Date.now();
// console.log(intToRoman(1994));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
