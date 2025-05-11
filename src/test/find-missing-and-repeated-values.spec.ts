import { findMissingAndRepeatedValues } from "../find-missing-and-repeated-values";

describe("findMissingAndRepeatedValues", () => {
  it("should return duplicate as 2 and missing as 4", () => {
    const result = findMissingAndRepeatedValues([
      [1, 3],
      [2, 2],
    ]);

    expect(result).toStrictEqual([2, 4]);
  });

  it("should return duplicate as 9 and missing as 5", () => {
    const result = findMissingAndRepeatedValues([
      [9, 1, 7],
      [8, 9, 2],
      [3, 4, 6],
    ]);

    expect(result).toStrictEqual([9, 5]);
  });
});
