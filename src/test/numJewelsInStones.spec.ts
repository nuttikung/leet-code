import { numJewelsInStones } from "../numJewelsInStones";

describe('numJewelsInStones', () => {
	it.each([
		['aA', 'aAAbbbb', 3],
		['z', 'ZZ', 0],
	])('should return count of jewels in stones', (jewels, stones, outcome) => {
		const result = numJewelsInStones(jewels, stones);
		expect(result).toBe(outcome);
	});
});
