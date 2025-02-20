import { sortTheStudents } from "../sortTheStudents"

describe("sortTheStudents", () => {
  test.each([
    [
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      2,
      [
        [7, 5, 11, 2],
        [10, 6, 9, 1],
        [4, 8, 3, 15],
      ],
    ],
    [
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      1,
      [
        [4, 8, 3, 15],
        [10, 6, 9, 1],
        [7, 5, 11, 2],
      ],
    ],
    [
      [
        [10, 6, 9, 1],
        [7, 5, 11, 2],
        [4, 8, 3, 15],
      ],
      3,
      [
        [4, 8, 3, 15],
        [7, 5, 11, 2],
        [10, 6, 9, 1],
      ],
    ],
  ])(
    "should return a sorted array 2 dimensions score from highest to lowest by student[k].",
    (input, k, expected) => {
      const result = sortTheStudents(input, k)
      expect(result).toMatchObject(expected)
    }
  )
})
