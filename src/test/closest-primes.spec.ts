import { closestPrimes } from "../closest-primes";

describe("closestPrimes", () => {
  it("should return [-1,-1] when left and right does not valid", () => {
    const result = closestPrimes(1, 1);
    expect(result).toStrictEqual([-1, -1]);
  });

  it("should return [-1,-1] when only found 1 element of prime", () => {
    const result = closestPrimes(1, 2);
    expect(result).toStrictEqual([-1, -1]);
  });

  it("should return [2,3] when only found 2 elements of prime", () => {
    const result = closestPrimes(2, 4);
    expect(result).toStrictEqual([2, 3]);
  });

  it("should return closet right value from all element", () => {
    const result = closestPrimes(19, 31);
    expect(result).toStrictEqual([29, 31]);
  });

  it("should return closet left value from all element", () => {
    const result = closestPrimes(10, 19);
    expect(result).toStrictEqual([11, 13]);
  });

  it("should return element without 1", () => {
    const result = closestPrimes(1, 4);
    expect(result).toStrictEqual([2, 3]);
  });
});
