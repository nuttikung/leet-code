function maximumCount(nums: number[]): number {
  let negativeCount = 0;
  let positiveCount = 0;

  nums.forEach((value) => {
    if (value === 0) {
      negativeCount += 1;
      positiveCount += 1;
    } else if (value < 0) {
      negativeCount += 1;
    } else {
      positiveCount += 1;
    }
  });

  return Math.max(negativeCount, positiveCount);
}

// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));

export { maximumCount };
