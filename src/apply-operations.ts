function applyMultiplyValue(nums: Array<number>): Array<number> {
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
  return answer;
}

function shiftZero(nums: Array<number>): Array<number> {
  // Shift 0 to end.
  const nonZero = nums.filter((value) => value !== 0);
  const final = new Array(nums.length - nonZero.length).fill(0);
  return nonZero.concat(final);
}

function applyOperations(nums: Array<number>): Array<number> {
  return shiftZero(applyMultiplyValue(nums));
}

// console.log(applyOperations([1, 2, 2, 1, 1, 0]));

// console.log(applyOperations([0, 1]));

export { applyOperations, applyMultiplyValue, shiftZero };
