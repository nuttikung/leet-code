/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	// Big O(4n) Total -> Linear Time Complexity
	const clone = new Set([...nums]);
	const Memo = new Map();
	// Big O(n)
	clone.forEach((element) => {
		Memo.set(element, 0);
	});
	// // Big O(n)
	nums.forEach((element) => {
		Memo.set(element, Memo.get(element) + 1);
	});
	// Big O(1)
	const total = [];
	// Big O(n)
	Memo.forEach((element, k) => {
		total.push({ num: k, amount: element });
	});
	// Big O(n) + O(n) + (k)
	const result = total
		.sort((a, b) => b.amount - a.amount)
		.splice(0, k)
		.map((record) => record.num);
	return result;
};

let start = Date.now();
topKFrequent([1, 1, 1, 4, 2, 3, 4], 2);
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
