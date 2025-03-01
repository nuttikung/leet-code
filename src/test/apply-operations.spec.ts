import {
  applyOperations,
  applyMultiplyValue,
  shiftZero,
} from "../apply-operations";

describe("applyMultiplyValue", () => {
  it("should apply multiple value to similar numbers", () => {
    const result = applyMultiplyValue([1, 1, 2, 2]);
    expect(result).toStrictEqual([2, 0, 4, 0]);
  });

  it("should not apply multiply operation when value are zero", () => {
    const result = applyMultiplyValue([0, 0, 0]);
    expect(result).toStrictEqual([0, 0, 0]);
  });

  it("should not apply multiple when value does not similar", () => {
    const result = applyMultiplyValue([1, 2, 3]);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});

describe("shiftZero", () => {
  it("should shift zero to end of array", () => {
    const result = shiftZero([0, 1, 0, 2]);
    expect(result).toStrictEqual([1, 2, 0, 0]);
  });

  it("should not shift any value when no zero value", () => {
    const result = shiftZero([3, 1, 4, 2]);
    expect(result).toStrictEqual([3, 1, 4, 2]);
  });
});

describe("applyOperations", () => {
  it("should apply operation and shift zero", () => {
    const result = applyOperations([1, 2, 2, 1, 1, 0]);
    expect(result).toStrictEqual([1, 4, 2, 0, 0, 0]);
  });

  it("should return no operation apply", () => {
    const result = applyOperations([1, 0]);
    expect(result).toStrictEqual([1, 0]);
  });
});
