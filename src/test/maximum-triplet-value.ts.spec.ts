import { tripletNumber, maximumTripletValue } from "../maximum-triplet-value";

describe("tripletNumber", () => {
  it.each([
    [12, 6, 1, 6],
    [12, 1, 6, 66],
  ])(
    "should return calculated value by ( num1 - num2 ) * num3 ",
    (i, j, k, expected) => {
      const result = tripletNumber(i, j, k);

      expect(result).toBe(expected);
    },
  );
});

describe("maximumTripletValue", () => {
  it.each([
    {
      input: [12, 6, 1, 2, 7],
      expected: 77,
    },
    {
      input: [1, 10, 3, 4, 19],
      expected: 133,
    },
    {
      input: [1, 2, 3],
      expected: 0,
    },
  ])("should return calculated value", ({ input, expected }) => {
    const result = maximumTripletValue(input);

    expect(result).toBe(expected);
  });

  it("should return 0 when negative value", () => {
    const result = maximumTripletValue([6, 12, 1]);

    expect(result).toBe(0);
  });
});
