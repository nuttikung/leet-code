import { pivotArray } from "../pivot-array";

describe("pivotArray", () => {
  it("should return not moving any value when it sorted already", () => {
    const mockData: Array<number> = [0, 2, 1, 3, 4, 5, 6];
    const selected = 6;
    const result = pivotArray(mockData, selected);

    expect(result).toStrictEqual(mockData);
  });

  it("should return swap left and middle only", () => {
    const mockData: Array<number> = [0, 2, 1, 3, 4, 5, 6];
    const expected: Array<number> = [0, 1, 2, 3, 4, 5, 6];
    const selected = 2;
    const result = pivotArray(mockData, selected);

    expect(result).toStrictEqual(expected);
  });

  it("should return sorted left right only", () => {
    const mockData: Array<number> = [0, 3, 4, 5, 6, 2, 2, 1];
    const expected: Array<number> = [0, 1, 2, 2, 3, 4, 5, 6];
    const selected = 2;
    const result = pivotArray(mockData, selected);

    expect(result).toStrictEqual(expected);
  });

  it("should return sorted array all position", () => {
    const mockData: Array<number> = [1, 0, 2, 0, 2, 1, 0, 2, 1];
    const expected: Array<number> = [0, 0, 0, 1, 1, 1, 2, 2, 2];
    const selected = 1;
    const result = pivotArray(mockData, selected);

    expect(result).toStrictEqual(expected);
  });
});
