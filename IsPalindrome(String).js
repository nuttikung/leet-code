const isNumeric = (c) => !isNaN(parseInt(c));

const isAlphabet = (c) => ("A" <= c && c <= "Z") || ("a" <= c && c <= "z");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const clone = s.split("").filter((c) => isNumeric(c) || isAlphabet(c));
	const reverseClone = [...clone].reverse().join("").toLowerCase();
	return reverseClone === clone.join("").toLowerCase();
};
// TODO: Optimize due to time exceed
let start = Date.now();
// Test 1:
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// Test 2:
// console.log(isPalindrome("race a ca"));
// Test 3:
// console.log(isPalindrome(" "));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
