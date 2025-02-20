/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums = [], k = 0) {
	const defaultLength = nums.length;
	const realK = k % defaultLength;
	if (k > 0) {
		nums.push(...nums);
		nums.splice(0, defaultLength - realK);
		nums.splice(defaultLength, realK);
	}
};