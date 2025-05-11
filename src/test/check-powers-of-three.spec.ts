import { checkPowersOfThree } from "../check-powers-of-three";

describe("checkPowersOfThree", () => {
  it.each([1, 3, 4, 12, 91])(
    "should return true when value is not remain 2",
    (value) => {
      const result = checkPowersOfThree(value);
      expect(result).toBeTruthy();
    },
  );

  it.each([21, 50])("should return false when number mod 3 remain 2", (value) => {
    const result = checkPowersOfThree(value);
    expect(result).toBeFalsy();
  });
});
