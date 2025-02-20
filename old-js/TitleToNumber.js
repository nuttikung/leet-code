const alphabets = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
	" ",
);
const Characterset = new Map();
const addNode = (node, value) => {
	Characterset.set(node, value);
};
alphabets.forEach((element, index) => addNode(element, index + 1));
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle, pow = 0) {
	if (columnTitle.length === 0) {
		return 0;
	}
	const current =
		Math.pow(26, columnTitle.length - 1) *
		Characterset.get(columnTitle.charAt(0));
	return current + titleToNumber(columnTitle.substring(1));
};

let start = Date.now();
console.log(titleToNumber("ZY"));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
