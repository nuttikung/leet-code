function applyOperations(nums: Array<number>): Array<number> {
  let answer: Array<number> = [];
  // Apply Multiple operation.
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] && nums[i] !== 0) {
      answer.push(nums[i] * 2);
      answer.push(0);
      i++;
    } else {
      answer.push(nums[i]);
    }
  }
  // Shift 0 to end.
  const nonZero = answer.filter((value) => value !== 0);
  const final = new Array(answer.length - nonZero.length).fill(0);

  return nonZero.concat(final);
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]));

console.log(applyOperations([0, 1]));
