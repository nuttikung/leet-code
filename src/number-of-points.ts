function makeNumArray(start: number, end: number): Array<number> {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function numberOfPoints(nums: Array<Array<number>>): number {
  const current = new Set<number>();
  nums.forEach(([start, end]) => {
    makeNumArray(start, end).forEach((v) => current.add(v));
  });
  return current.size;
}

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ]),
);

console.log(
  numberOfPoints([
    [1, 3],
    [5, 8],
  ]),
);
