export function sumSubarrayMins(arr: number[]): number {
  let sum = 0
  const memo = new Map<string, number>()
  // window size
  for (let i = 1; i <= arr.length; i++) {
    // pointer index
    for (let j = 0; j + i <= arr.length; j++) {
      const current = arr[j + i - 1]
      if (memo.get(`${i - 1}-${j}`) === undefined) {
        memo.set(`${i}-${j}`, current)
        sum += current
      } else if ((memo.get(`${i - 1}-${j}`) as number) < current) {
        memo.set(`${i}-${j}`, memo.get(`${i - 1}-${j}`)!)
        sum += memo.get(`${i - 1}-${j}`) as number
      } else {
        memo.set(`${i}-${j}`, current)
        sum += current
      }
    }
  }
  return sum % (Math.pow(10, 9) + 7)
}

// [3,1,2,4]

// DP[`i-j`]
// i = 1
// [3] j=0
// [1] j=1
// [2] j=2
// [4] j=3

// i=2
// [3,1] j=0 check j=1 can use dp[i] compare array[j]
// [1,2] j=1 check j=2
// [2,4] j=2 check j=3

// i=3
// [3,1,2]
// [1,2,4]

// i=4
// [3,1,2,4]
