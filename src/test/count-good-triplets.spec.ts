import { isGoodTriplet } from "../count-good-triplets";

describe("isGoodTriplet", () => {
  it("should return true when valid triplets number", () => {
    const result = isGoodTriplet(3, 0, 1, 7, 2, 3);
    expect(result).toBeTruthy();
  });

  it("should return false when invalid triplets number", () => {
    const result = isGoodTriplet(1, 1, 2, 0, 0, 1);
    expect(result).toBeFalsy();
  });
});
