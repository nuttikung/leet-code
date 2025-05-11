import { isDivisible, groupIndexByNumber, countPairs } from "../count-pairs";

describe("isDivisible", () => {
  it.each([0, 1, 2, 3, 4, 5, 6])(
    "should return false when diverder is zero",
    (num) => {
      const result = isDivisible(num, 0);
      expect(result).toBeFalsy();
    },
  );

  it.each([
    [0, 1],
    [4, 2],
    [6, 3],
    [125, 5],
    [60, 10],
  ])("should return true when the value divisible as %d/%d", (num, divider) => {
    const result = isDivisible(num, divider);
    expect(result).toBeTruthy();
  });

  it.each([
    [1, 3],
    [9, 2],
    [10, 7],
    [21, 4],
  ])(
    "should return false when divide number remain not zero as %d/%d",
    (num, divider) => {
      const result = isDivisible(num, divider);
      expect(result).toBeFalsy();
    },
  );
});

describe("groupIndexByNumber", () => {
  it("should group number when number has duplicated", () => {
    const input = [1, 2, 2, 3, 3, 1, 1];
    const result = groupIndexByNumber(input);

    expect(result).toStrictEqual([
      [0, 5],
      [0, 6],
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it("should return empty array when no duplicated numbers", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const result = groupIndexByNumber(input);

    expect(result).toStrictEqual([]);
  });
});

describe("countPairs", () => {
  it.each<{ input: Array<number>; k: number; expected: number }>([
    { input: [3, 1, 2, 2, 2, 1, 3], k: 2, expected: 4 },
    { input: [1, 2, 3, 4], k: 1, expected: 0 },
  ])(
    "should return count when num[i] === num[j] and i*j can divisible by k",
    ({ input, k, expected }) => {
      const result = countPairs(input, k);

      expect(result).toBe(expected);
    },
  );
});
