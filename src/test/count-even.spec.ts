import { countEven } from "../count-even";

describe("countEven", () => {
  it("should return 2 when input is 4", () => {
    const result = countEven(4);
    expect(result).toBe(2);
  });

  it("should return 14 when input is 30", () => {
    const result = countEven(30);
    expect(result).toBe(14);
  });
});
