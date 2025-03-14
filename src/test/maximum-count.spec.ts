import { maximumCount } from "../maximum-count";

describe("maximumCount", () => {
  it("should return 0 when empty array", () => {
    const result = maximumCount([]);
    expect(result).toBe(0);
  });

  it.each([
    [[1, 2, 3], 3],
    [[-2, -1], 2],
  ])("should return count when number is only one side", (nums, count) => {
    const result = maximumCount(nums);
    expect(result).toBe(count);
  });

  it("should return negative count when value greater than positive count", () => {
    const result = maximumCount([-2, -1, 1]);
    expect(result).toBe(2);
  });

  it("should return positive count when value greater than negative count", () => {
    const result = maximumCount([-1, 1, 1]);
    expect(result).toBe(2);
  });
});
