import { findWordsContaining } from "./findWordsContaining";

describe("findWordsContaining", () => {
  it("should return empty when data is not include search text", () => {
    const result = findWordsContaining(["a", "b", "c"], "e");
    expect(result).toStrictEqual([]);
  });

  it("should return indices of words position", () => {
    const result = findWordsContaining(["a", "b", "ca"], "a");
    expect(result).toStrictEqual([0, 2]);
  });
});
