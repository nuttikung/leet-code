/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const merge = [...nums1, ...nums2].sort((a, b) => a - b);
	if ((merge.length - 1) % 2 === 0) {
		return merge[(merge.length - 1) / 2];
	} else {
		return (
			(merge[Math.floor((merge.length - 1) / 2)] +
				merge[Math.ceil((merge.length - 1) / 2)]) /
			2
		);
	}
};

let start = Date.now();
console.log(findMedianSortedArrays([1], [2]));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
