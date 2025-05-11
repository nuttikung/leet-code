const cands = (n = 1, accumulator = "") => {
	if (n === 1) {
		return ["1"];
	}
	const clone = accumulator.split("");
	const result = [];
	let count = 1;
	for (let i = 0; i < clone.length; i++) {
		if (i === clone.length) {
			result.push(count, clone[i]);
		} else if (clone[i] !== clone[i + 1]) {
			result.push(count, clone[i]);
			count = 1;
		} else {
			count += 1;
		}
	}
	return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	// Big O(n) 
	let combine = "";
	for (let i = 1; i <= n; i++) {
		combine = cands(i, combine).join("");
	}
	return combine;
};