/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	if (n === 1) {
		return true;
	}
	if (2 <= n && n <= 9) {
		return false;
	}
	const clone = `${n}`.split("");
	const total = clone.reduce(
		(accumulator, current) => accumulator + Math.pow(parseInt(current), 2),
		0,
	);
	while (`${total}`.split("").length > 1) {
		return isHappy(total);
	}
	if (total === 1) {
		return true;
	}
};

// TODO: Optimize due to time exceed
let start = Date.now();
// Test 1:
console.log(isHappy(7));
// Test 2:
// console.log(isPalindrome(-121));
// Test 3:
// console.log(isPalindrome(10));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
