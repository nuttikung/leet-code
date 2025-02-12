import { buildArray } from "./buildArray";

describe("buildArray", () => {
	test.each([
		[
			[0, 2, 1, 5, 3, 4],
			[0, 1, 2, 4, 5, 3],
		],
		[
			[5, 0, 1, 2, 3, 4],
			[4, 5, 0, 1, 2, 3],
		],
	])(
		"should return new array for nums[nums[index]]",
		(input: number[], expected: number[]) => {
			const result = buildArray(input);
			expect(result).toMatchObject(expected);
		},
	);
});
