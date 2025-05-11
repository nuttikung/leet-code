import { numberOfAlternatingGroups } from "../number-of-alternating-groups";

describe("numberOfAlternatingGroups", () => {
  it("should return 0 when k is equal length and not alternating", () => {
    const result = numberOfAlternatingGroups([1, 1, 0, 1], 4);
    expect(result).toBe(0);
  });

  it.each<[Array<number>, number, number]>([
    [[0, 1, 0, 1, 0], 3, 3],
    [[0, 1, 0, 0, 1, 0, 1], 6, 2],
  ])("should return alternating number", (input, k, expected) => {
    const result = numberOfAlternatingGroups(input, k);
    expect(result).toBe(expected);
  });
});
