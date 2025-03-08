import { countBlack, minimumRecolors } from "../minimum-recolors";

describe("countBlack", () => {
  it("should return 0 when empty string", () => {
    const result = countBlack("");
    expect(result).toBe(0);
  });

  it("should return B length", () => {
    const result = countBlack("BWBBW");
    expect(result).toBe(3);
  });
});

describe("minimumRecolors", () => {
  it("should return minimium swap color", () => {
    const result = minimumRecolors("WBBWWBBWBW", 7);
    expect(result).toBe(3);
  });

  it("should return 0 when k is telling no swap", () => {
    const result = minimumRecolors("WBWBBBW", 2);
    expect(result).toBe(0);
  });
});
