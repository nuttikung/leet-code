/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	return Math.pow(x, n);
};

let start = Date.now();
console.log(myPow(2.0, -2));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
