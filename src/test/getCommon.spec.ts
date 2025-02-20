import { getCommon } from "../getCommon";

describe("getCommon", () => {
  it("should get a value as minimum value which is intersected between two arrays", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [2, 4];
    expect(getCommon(nums1, nums2)).toBe(2);
  });

  it("should get a value as minimum value which is intersected between two arrays", () => {
    const nums1 = [1, 2, 3, 6];
    const nums2 = [2, 3, 4, 5];
    expect(getCommon(nums1, nums2)).toBe(2);
  });

  it("should return -1 when both are no common", () => {
    const nums1 = [1];
    const nums2 = [2];
    expect(getCommon(nums1, nums2)).toBe(-1);
  });
});
