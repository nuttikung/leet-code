// TODO: Two Sum [EASY]
// import Nums from "./example-input";
const Nums = require("./example-input");
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Binary Search
const binarySearch = (A = [], T) => {
	console.log("binary target: ", T);
	let L = 0;
	let R = A.length - 1;
	while (L <= R) {
		let middle = Math.floor((L + R) / 2);
		if (A[middle] < T) {
			L = middle + 1;
		} else if (A[middle] > T) {
			R = middle - 1;
		} else {
			return middle;
		}
	}
	return null;
};

const twoSum = function (nums = [], target) {
	let clone = [...nums].sort((a, b) => a - b);
	let twoValues = [];
	// หาเลข 2 ตัวไว้ก่อนว่าเป็นเลขอะไร
	for (let i = 0; i < clone.length; i++) {
		const element = clone[i];
		const transform = clone.slice(0, i).concat(clone.slice(i + 1));
		const search = binarySearch(transform, target - element);
		// console.log("search: ", search);
		// BREAK the loop
		if (search !== null) {
			twoValues = [...twoValues, transform[search], element];
			break;
		}
	}
	// two value ไปหาต่อว่า ใน nums เลขสองตัวนี้ จาก H->T และ T->H เป็นลำดับไหน
	const idxResult = nums.reduce(
		(accumulator, value, index) =>
			value === twoValues[0] || value === twoValues[1]
				? [...accumulator, index]
				: accumulator,
		[],
	);
	return idxResult;
};

let start = Date.now();
// console.log(binarySearch([1, 1, 2, 2, 3, 3, 4, 4, 6], 6));
// console.log(twoSum(Nums, 7828670));
console.log(twoSum([3, 2, 95, 4, -3], 92));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
