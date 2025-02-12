export const firstPalindrome = (words: string[]): string => {
	let ans = '';
	for (const word of words) {
		if (word === word.split('').reverse().join('')) {
			ans = word;
			break;
		}
	}
	return ans;
};
