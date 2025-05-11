function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let sum = 0;
  let total = 0;
  const numberSet = new Set<number>();
  // O(n)
  grid.forEach((nums) =>
    nums.forEach((value) => {
      sum += value;
      numberSet.add(value);
    }),
  );
  numberSet.forEach((num) => (total += num));
  // O(1)
  const expected =
    ((1 + Math.pow(grid.length, 2)) * Math.pow(grid.length, 2)) / 2;
  const miss = Math.abs(expected - total);
  const dupe = Math.abs(total - sum);
  return [dupe, miss];
}

export { findMissingAndRepeatedValues };
