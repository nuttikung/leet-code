import { firstPalindrome } from "../firstPalindrome";

describe('firstPalindrome', () => {
	it.each([
		[['abc', 'car', 'ada', 'racecar', 'cool'], 'ada'],
		[['notapalindrome', 'racecar'], 'racecar'],
		[['def', 'ghi'], ''],
	])(
		'should return the first paladrome or empty string if not found',
		(input, outcome) => {
			const result = firstPalindrome(input);
			expect(result).toBe(outcome);
		}
	);
});
