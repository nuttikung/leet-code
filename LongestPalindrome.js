// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
// 	// cut time if self is palindrome should return self ?
// 	if (s.length === 1) {
// 		return s;
// 	}
// 	let result = "";
// 	// start from big length cause need find longest text
// 	for (let i = s.length; i > 1; i--) {
// 		for (let j = 0; j <= s.length - i; j++) {
// 			// const element = s.substring(j, j + i);
// 			if (
// 				s
// 					.substring(j, j + i)
// 					.split("")
// 					.reverse()
// 					.join("") === s.substring(j, j + i)
// 			) {
// 				result = s.substring(j, j + i);
// 				break;
// 			}
// 		}
// 		if (result !== "") {
// 			break;
// 		}
// 	}
// 	if (result === "") {
// 		return s.charAt(0);
// 	}
// 	return result;
// };

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	// cut time if self is palindrome should return self ?
	if (s.length === 1) {
		return s;
	}
	let result = "";
	// start from big length cause need find longest text
	for (let i = s.length; i > 1; i--) {
		for (let j = 0; j <= s.length - i; j++) {
			// const element = s.substring(j, j + i);
			if (
				s
					.substring(j, j + i)
					.split("")
					.reverse()
					.join("") === s.substring(j, j + i)
			) {
				result = s.substring(j, j + i);
				break;
			}
		}
		if (result !== "") {
			break;
		}
	}
	if (result === "") {
		return s.charAt(0);
	}
	return result;
};