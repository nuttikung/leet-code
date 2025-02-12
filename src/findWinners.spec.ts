import { findWinners } from "./findWinners"

test("Should getting empty winner", () => {
  expect(
    findWinners([
      [1, 2],
      [2, 1],
      [1, 3],
      [3, 2],
      [2, 3],
      [3, 1],
    ])
  ).toMatchObject([[], []])
})

test("should getting winner 1,2,3", () => {
  expect(
    findWinners([
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 6],
      [5, 6],
      [6, 4],
      [6, 5],
    ])
  ).toMatchObject([[1, 2, 3], []])
})

test("leet code T1: ", () => {
  expect(
    findWinners([
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ])
  ).toMatchObject([
    [1, 2, 10],
    [4, 5, 7, 8],
  ])
})

test("leet code T2: ", () => {
  expect(
    findWinners([
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ])
  ).toMatchObject([[1, 2, 5, 6], []])
})
