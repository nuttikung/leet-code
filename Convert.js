/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	// COMMENT: Worst case fast return O(1)
	if (numRows === 1) {
		return s;
	}
	let result = "";
	// COMMENT: Prepare Map
	const charMap = new Map();
	// Big O (numRows)
	for (let i = 0; i < numRows; i++) {
		charMap.set(i, []);
	}
	const sArray = s.split("");
	let current = 0;
	// mode = 'up' | 'down'
	let mode = "down";
	// Big O(n)
	for (let i = 1; i <= sArray.length; i++) {
		charMap.get(current).push(sArray[i - 1]);
		if (mode === "down") {
			current = current + 1;
		} else {
			current = current - 1;
		}
		if (current >= numRows && mode === "down") {
			current = current - 2;
			mode = "up";
		} else if (current < 0 && mode === "up") {
			current = current + 2;
			mode = "down";
		}
	}
	// Big O (numRows)
	for (let entry of charMap) {
		result += entry[1].join("");
	}
	return result;
};

let start = Date.now();
console.log(convert("A", 2));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
