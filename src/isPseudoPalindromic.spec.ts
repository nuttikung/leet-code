import { isPseudoPalindromic } from "./isPseudoPalindromic"

describe("isPseudoPalindromic", () => {
  test.each([[[2, 3, 3]], [[2, 3, 1, 1, 2]]])(
    "should return true when it is pseudo-palindromic %p",
    (input) => {
      const result = isPseudoPalindromic(input)
      expect(result).toBeTruthy()
    }
  )

  test.each([[[2, 3, 1]], [[2, 3, 1, 4, 5]]])(
    "should return false when it is not pseudo-palindromic %p",
    (input) => {
      const result = isPseudoPalindromic(input)
      expect(result).toBeFalsy()
    }
  )
})
