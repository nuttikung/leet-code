import { coloredCells } from "../colored-cells";

describe("coloredCells", () => {
  it("should return 1", () => {
    const result = coloredCells(1);
    expect(result).toBe(1);
  });

  it("should return 5", () => {
    const result = coloredCells(2);
    expect(result).toBe(5);
  });

  it("should return 13", () => {
    const result = coloredCells(3);
    expect(result).toBe(13);
  });
});
