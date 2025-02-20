import { climbStairs } from "../climb-stairs";

const data = [
  [2, 2],
  [3, 3],
  [4, 5],
];

describe("should return the number of climbStairs", () => {
  test.each(data)("the result from climbStairs(%i) as %i", (n, expected) => {
    const result = climbStairs(n);
    expect(result).toBe(expected);
  });
});
