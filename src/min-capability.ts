function isPossiblyCapability(
  nums: number[],
  k: number,
  finding: number,
): boolean {
  let isPossible: boolean = false;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= finding) {
      count += 1;
      i++;
    }

    if (count >= k) {
      isPossible = true;
      break;
    }
  }
  return isPossible;
}

function minCapability(nums: number[], k: number): number {
  let ans = 1;
  let low = Number.MAX_VALUE;
  let high = Number.MIN_VALUE;

  nums.forEach((value) => {
    if (value < low) {
      low = value;
    }

    if (value > high) {
      high = value;
    }
  });

  // binary search
  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);
    console.log(
      "low/high : ",
      low,
      high,
      middle,
      isPossiblyCapability(nums, k, middle),
    );
    if (isPossiblyCapability(nums, k, middle)) {
      ans = middle;
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return ans;
}

// 5
// console.log(minCapability([2, 3, 5, 9], 2));
// 2
// console.log(minCapability([2, 7, 9, 3, 1], 2));

export { minCapability };
