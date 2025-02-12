function intersection(nums1: number[], nums2: number[]): number[] {
  const ans = new Set<number>();
  const firstSet = new Set<number>(nums1);
  const secondSet = new Set<number>(nums2);

  for (const num of firstSet) {
    if (secondSet.has(num)) {
      ans.add(num);
    }
  }

  return [...ans];
}

intersection([4, 9, 5], [9, 4, 9, 8, 4]);
