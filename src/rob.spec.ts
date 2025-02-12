import { rob } from "./rob"

describe("rob", () => {
  test.each([
    [[1], 1],
    [[5], 5],
    [[3], 3],
  ])(
    "should return amount of money as a value that can rob in one night %p -> %i",
    (input, expected) => {
      const result = rob(input)
      expect(result).toBe(expected)
    }
  )

  test.each([
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[1, 2, 3, 1, 5, 8, 1], 12],
  ])(
    "should return an amount of maximum money can rob in one night %p -> %i",
    (input, expected) => {
      const result = rob(input)
      expect(result).toBe(expected)
    }
  )
})
