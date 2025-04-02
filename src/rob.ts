export function rob(nums: number[]): number {
  const memo = new Map<number, number>();
  const dp = (n: number): number => {
    if (n === 0) {
      return nums[0];
    }
    if (n === 1) {
      return Math.max(...[nums[0], nums[1]]);
    }
    if (memo.get(n) === undefined) {
      memo.set(n, Math.max(...[dp(n - 2) + nums[n], dp(n - 1)]));
    }
    return memo.get(n) as number;
  };
  return dp(nums.length - 1);
}

// Dynamic Programming
/**
 * วิธีการคิดคือ เราจะเอาตัวเลขตั้งต้นคอยเทียบ เช่น มี [1,2,3,4,2]
 * dp(4) = max(dp(2) + arr[4], dp(3)) -> max((4+2),6)-> 6
 * dp(3) = max(dp(1) + arr[3], dp(2)) -> max((2+4),4) -> 6
 * dp(2) = max(dp(0) + arr[2], dp(1)) -> max((1+3),2) -> 4
 * dp(1) = max(arr[0], arr[1]) -> max(1,2) -> 2
 * dp(0) = arr[0] -> 1
 */
