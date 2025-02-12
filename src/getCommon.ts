export const getCommon = (nums1: number[], nums2: number[]): number => {
  let ans = -1;
  const biggerArray = nums1.length > nums2.length ? "nums1" : "nums2";
  const commonSet: Set<number> =
    biggerArray === "nums1" ? new Set<number>(nums1) : new Set<number>(nums2);

  for (const num of biggerArray === "nums1" ? nums2 : nums1) {
    if (commonSet.has(num)) {
      ans = num;
      break;
    }
  }

  return ans;
};
