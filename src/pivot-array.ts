function pivotArray(nums: number[], pivot: number): number[] {
  const left: Array<number> = [];
  const middle: Array<number> = [];
  const right: Array<number> = [];

  // read to be left/right/middle
  nums.forEach((value) => {
    if (value < pivot) {
      left.push(value);
    } else if (value === pivot) {
      middle.push(value);
    } else {
      right.push(value);
    }
  });

  return left.concat(middle).concat(right);
}

export { pivotArray };
