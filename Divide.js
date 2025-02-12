/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	const quotient = dividend / divisor;
	if (quotient >= Math.pow(2, 31)) {
		return Math.pow(2, 31) - 1;
	} else if (quotient <= Math.pow(-2, 31)) {
		return Math.pow(-2, 31);
	} else {
		return quotient > 0 ? Math.floor(quotient) : Math.ceil(quotient);
	}
};

let start = Date.now();
console.log(divide(-2147483648, -1));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
