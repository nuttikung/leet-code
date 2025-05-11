function canAssignCandies(
  candies: number[],
  predicate: number,
  k: number,
): boolean {
  let sum = 0;
  candies.forEach((value) => (sum += Math.floor(value / predicate)));
  return sum >= k;
}

function maximumCandies(candies: number[], k: number): number {
  let answer: number = 0;
  // binary search length
  let clone = [...candies].sort((a, b) => a - b);
  let low = 1;
  let high = Math.max(...candies);

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (canAssignCandies(clone, mid, k)) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

export { maximumCandies, canAssignCandies };
