/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let clone = parseInt(
		(x < 0 ? x * 1 : x).toString().split("").reverse().join(""),
	);
	if (x < 0) {
		clone = -clone;
	}
	if (clone < -Math.pow(2, 31) || clone > Math.pow(2, 31) - 1) {
		return 0;
	}
	return clone;
};

let start = Date.now();
console.log(reverse(-2147483648));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
