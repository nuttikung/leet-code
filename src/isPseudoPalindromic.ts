export function isPseudoPalindromic(path: number[]): boolean {
  const memo: Record<string, number> = {}
  path.forEach((val: number) => {
    if (memo[`${val}`] === undefined) {
      memo[`${val}`] = 1
    } else {
      memo[`${val}`] = memo[`${val}`] + 1
    }
  })
  const sum = Object.values(memo).reduce(
    (accumulative, current) => (accumulative += current % 2),
    0
  )
  return path.length % 2 == 0 ? sum === 0 : sum === 1
}
