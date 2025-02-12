import { rearrangeArray } from './rearrangeArray';

describe('rearrangeArray', () => {
	it('should return no sign swap with sign number', () => {
		const result = rearrangeArray([3, 1, -2, -5, 2, -4]);
		expect(result).toStrictEqual([3, -2, 1, -5, 2, -4]);
	});

	it('should return no sign swap with sign number', () => {
		const result = rearrangeArray([-1, 1]);
		expect(result).toStrictEqual([1, -1]);
	});
});
