function numberOfAlternatingGroups(colors: number[], k: number): number {
  let answer: number = 0;
  let left = 0;
  let right = 1;

  while (left <= colors.length - 1) {
    const leftIndex = (right - 1) % colors.length;
    const prev = colors[leftIndex];
    const rightIndex = right % colors.length;
    const current = colors[rightIndex];
    if (prev !== current && right - left === k - 1) {
      answer += 1;
      left += 1;
      right += 1;
    } else if (prev !== current) {
      right += 1;
    } else {
      left = right;
      right = left + 1;
    }
  }

  return answer;
}

export { numberOfAlternatingGroups };
