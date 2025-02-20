function findErrorNums(nums: number[]): number[] {
  const memo = new Set<number>();
  let sum = 0;
  let duplicated: number = 0;
  for (const num of nums) {
    if (memo.has(num) === false) {
      memo.add(num);
      sum += num;
    } else {
      duplicated = num;
    }
  }
  const total = ((1 + nums.length) * nums.length) / 2;
  return [duplicated, total - sum];
}

export { findErrorNums };
