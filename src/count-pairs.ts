function isDivisible(value: number, divider: number): boolean {
  if (divider === 0) {
    return false;
  }
  return value % divider === 0;
}

// ----------------------------------------------------------------------

type TNumberRuple = [number, number];

function groupIndexByNumber(nums: Array<number>): Array<TNumberRuple> {
  const numberGroups: Array<TNumberRuple> = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        const element: TNumberRuple = [i, j];
        numberGroups.push(element);
      }
    }
  }

  return numberGroups;
}

// ----------------------------------------------------------------------

function countPairs(nums: Array<number>, k: number): number {
  return groupIndexByNumber(nums).filter(([num1, num2]) =>
    isDivisible(num1 * num2, k),
  ).length;
}

// console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));
// console.log(countPairs([1, 2, 3, 4], 1));

export { countPairs, isDivisible, groupIndexByNumber };
