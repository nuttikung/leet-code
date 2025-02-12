const input = require("./input");

const mergeSort = (m = []) => {
	if (m.length <= 1) {
		return m;
	}
	let left = [];
	let right = [];
	for (let i = 0; i < m.length; i++) {
		const element = m[i];
		if (i < m.length / 2) {
			left.push(element);
		} else {
			right.push(element);
		}
	}
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
};

const merge = (left = [], right = []) => {
	let result = [];
	let L = 0;
	let R = 0;
	// L = 0, R = 0, Res = [1]
	// L = 0, R = 1, Res = [0,0]
	while (L < left.length || R < right.length) {
		if (L !== left.length && R !== right.length) {
			if (left[L] <= right[R]) {
				result.push(left[L]);
				L = L + 1;
			} else {
				result.push(right[R]);
				R = R + 1;
			}
		} else if (L === left.length) {
			result.push(...right.slice(R));
			break;
		} else {
			result.push(...left.slice(L));
			break;
		}
	}
	return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
	return mergeSort(nums);
};

let start = Date.now();
console.log(sortArray([-2, 3, -5]));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
