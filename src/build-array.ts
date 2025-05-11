function buildArray(nums: number[]): number[] {
  return nums.map((_: number, index: number) => nums[nums[index]]);
}

export { buildArray };
