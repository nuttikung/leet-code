import { maximum69Number } from "../maximum69Number";

describe("maximum69Number", () => {
	test.each([
		[6, 9],
		[9669, 9969],
		[9996, 9999],
		[9999, 9999],
	])(
		"should return max number by changing one place of 6 to 9",
		(input, expected) => {
			const result = maximum69Number(input);
			expect(result).toBe(expected);
		},
	);
});
