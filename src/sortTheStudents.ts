export function sortTheStudents(score: number[][], k: number): number[][] {
  const memo = new Map<number, number[]>()
  const nums: number[] = []
  score.forEach((row: number[]) => {
    nums.push(row[k])
    memo.set(row[k], row)
  })
  return nums.sort((a, b) => b - a).map((value) => memo.get(value)! as number[])
}

sortTheStudents(
  [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  2
)
