const Phone = {
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"],
};

const findAlphabets = (s) => Phone[s];

const cartesain = (a, b) => {
	let result = [];
	for (let i = 0; i < a.length; i++) {
		const _a = a[i];
		for (let j = 0; j < b.length; j++) {
			const _b = b[j];
			result = [...result, `${_a}${_b}`];
		}
	}
	return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits === "") {
		return [];
	}
	let clone = digits.split("").map((val) => Phone[parseInt(val)]);
	let total = [];
	for (let i = 0; i < clone.length; i++) {
		let element = [];
		if (i === 0) {
			element = clone[i];
		} else {
			element = cartesain(total, clone[i]);
		}
		total = element;
	}
	return total;
};

let start = Date.now();
letterCombinations("232222222");
// console.log(cartesain(["a", "b", "c"], ['d','e','f']));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
