import { majorityElement } from './majorityElement';

describe('majorityElement.ts', () => {
	it.each([
		[[3, 2, 3], 3],
		[[2, 2, 1, 1, 1, 2, 2], 2],
		[[1], 1],
	])(
		'should return the number who has > nums length / 2',
		(input, expected) => {
			const result = majorityElement(input);
			expect(result).toBe(expected);
		}
	);
});
