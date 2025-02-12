/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s
		.split(" ")
		.filter((value) => value !== "")
		.reverse()
		.join(" ");
};