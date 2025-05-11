import { divideArray } from "../divide-array";

describe("divideArray", () => {
  it("should return true when pair is valid", () => {
    const result = divideArray([3, 2, 2, 3]);
    expect(result).toBeTruthy();
  });

  it("should return false when pai does not valid", () => {
    const result = divideArray([1, 2, 3, 4]);
    expect(result).toBeFalsy();
  });
});
