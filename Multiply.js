const nums = [
	{ no: 1, ky: "1" },
	{ no: 2, ky: "2" },
	{ no: 3, ky: "3" },
	{ no: 4, ky: "4" },
	{ no: 5, ky: "5" },
	{ no: 6, ky: "6" },
	{ no: 7, ky: "7" },
	{ no: 8, ky: "8" },
	{ no: 9, ky: "9" },
	{ no: 0, ky: "0" },
];

const numList = new Map();

nums.forEach((element) => {
	numList.set(element.ky, element.no);
});

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	let clone1 = BigInt(0);
	let clone2 = BigInt(0);
	for (let i = num1.length - 1; i >= 0; i--) {
		clone1 +=
			BigInt(numList.get(num1.charAt(i))) *
			BigInt(Math.pow(10, num1.length - i - 1));
	}
	for (let j = num2.length - 1; j >= 0; j--) {
		clone2 +=
			BigInt(numList.get(num2.charAt(j))) *
			BigInt(Math.pow(10, num2.length - j - 1));
	}
	return `${clone1 * clone2}`;
};

// TODO: Optimize due to time exceed
let start = Date.now();
console.log(multiply("401716832807512840963", "167141802233061013023557397451289113296441069"));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
