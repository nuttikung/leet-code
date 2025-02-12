/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	nums2.splice(nums2.length);
	nums1.forEach((val, index) =>
		index >= m ? (nums1[index] = nums2[index - m]) : val,
	);
	nums1.sort((a, b) => a - b);
};
let start = Date.now();
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// console.log();
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
