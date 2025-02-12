/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	// Keep dta in by key sorting
	const wordsMap = new Map();
	const result = []
	for (let i = 0; i < strs.length; i++) {
		const element = strs[i];
		const key = element.split("").sort().join("");
		// console.log("key : ", key, " word : ", element);
		// console.log(wordsMap.get(key))
		if (wordsMap.get(key) === undefined) {
			wordsMap.set(key, [].concat(element));
		} else {
			wordsMap.set(key, wordsMap.get(key).concat(element))
		}
	}
	wordsMap.forEach((value) => {
		result.push(value)
	})
	return result
};

// TODO: Optimize due to time exceed
let start = Date.now();
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);