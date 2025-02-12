const s = "eedaaad";

const charArr = s.split("");

const solution = (S) => {
	let word = [];
	let result = [];
    let counter = 0
	const charArr = S.split("");
	// Implement your solution here
	for (let i = 0; i < charArr.length; i = i + 1) {
		// console.log(i, charArr[i]);
		if (word.filter((val) => val === charArr[i]).length < 2) {
			if (
				result[counter-2] === charArr[i] && result[counter-1] === charArr[i]
			) {
				// skip
			} else if (i === charArr.length - 1) {
				word = [...word, charArr[i]];
				result = [...result, ...word];
			} else {
                counter = counter + 1
				word = [...word, charArr[i]];
			}
		} else {
			result = [...result, ...word];
			word = [];
		}
	}
	console.log(result.join(""));
	return result.join("");
};

solution(s);
