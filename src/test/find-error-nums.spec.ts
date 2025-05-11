import { findErrorNums } from "../find-error-nums";

describe("findErrorNums", () => {
  test.each([
    [
      [1, 2, 2, 4],
      [2, 3],
    ],
    [
      [3, 2, 2],
      [2, 1],
    ],
    [
      [1, 4, 4, 3, 5],
      [4, 2],
    ],
    [
      [1, 4, 4, 3, 5, 2],
      [4, 6],
    ],
  ])(
    "should return [duplicate, missing number] from %p as %p",
    (input, expected) => {
      const result = findErrorNums(input);
      expect(result).toMatchObject(expected);
    },
  );
});
