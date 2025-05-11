import { sumSubarrayMins } from "../sumSubarrayMins"

describe("sumSubarrayMins", () => {
  test("should return 0 when empty array provide", () => {
    const result = sumSubarrayMins([])
    expect(result).toBe(0)
  })

  const testData = [
    [[3, 1, 2, 4], 17],
    [[11, 81, 94, 43, 3], 444],
    [[1, 2, 3], 10],
  ]
  test.each(testData)(
    "should return total sum from %p as %p",
    (arr, expected) => {
      const result = sumSubarrayMins(arr as number[])
      expect(result).toBe(expected)
    }
  )
})
