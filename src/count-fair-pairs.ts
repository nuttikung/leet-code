function isLower(lower: number, value: number): boolean {
  return lower <= value;
}

function isGreater(upper: number, value: number): boolean {
  return upper >= value;
}

function countFairPairs(nums: number[], lower: number, upper: number): number {
  let count: number = 0;
  // two pointers
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        isLower(lower, nums[i] + nums[j]) &&
        isGreater(upper, nums[i] + nums[j])
      ) {
        count += 1;
      }
    }
  }

  return count;
}

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));

export { countFairPairs };
