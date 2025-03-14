import { canAssignCandies, maximumCandies } from "../maximum-candies";

describe("canAssignCandies", () => {
  it("should return true when candy is possible to assign", () => {
    const result = canAssignCandies([1, 2, 4], 2, 3);
    expect(result).toBeTruthy();
  });

  it("should return false when candy is not possible to assign", () => {
    const result = canAssignCandies([1, 2, 4], 2, 6);
    expect(result).toBeFalsy();
  });
});

describe("maximumCandies", () => {
  it.each<{
    candy: Array<number>;
    children: number;
    expected: number;
  }>([
    {
      candy: [5, 8, 6],
      children: 3,
      expected: 5,
    },
    {
      candy: [5, 7, 6],
      children: 4,
      expected: 3,
    },
    {
      candy: [2, 5],
      children: 11,
      expected: 0,
    },
  ])(
    "should return maximium candy can assign",
    ({ candy, children, expected }) => {
      const result = maximumCandies(candy, children);
      expect(result).toBe(expected);
    },
  );
});
