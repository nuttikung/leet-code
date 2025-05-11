import { uniqueOccurrences } from "../uniqueOccurrences"

const nonOccurrences = [[[1, 1, 2, 2, 2, 3]], [[1, 2, 2]], [[1]]]
const occurrences = [[[1, 2]], [[1, 1, 3, 3, 2]], [[1, 2, 3, 4, 5, 6, 7, 8, 8]]]

describe("should get true when not occurrences", () => {
  test.each(nonOccurrences)(
    "getting true number of occurrences as %p is not similar",
    (input) => {
      const result = uniqueOccurrences(input)
      expect(result).toBeTruthy()
    }
  )
})

describe("should get false when occurrences", () => {
  test.each(occurrences)(
    "getting false number of occurrences as %p is similar",
    (input) => {
      const result = uniqueOccurrences(input)
      expect(result).toBeFalsy()
    }
  )
})
