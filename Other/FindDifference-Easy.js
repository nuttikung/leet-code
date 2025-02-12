/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    // Using set for query we have actually can indexOf or includes too.
    const clone1 = new Set(nums1)
    const clone2 = new Set(nums2)
    // Distinct
    const unique1 = [...clone1]
    const unique2 = [...clone2]
    return [
        unique1.filter((value) => !clone2.has(value)),
        unique2.filter((value) => !clone1.has(value)),
    ]
};

let start = Date.now();
// T1 nums1 = [1,2,3], nums2 = [2,4,6]
console.log(findDifference([1, 2, 3], [2, 4, 6]))
// T2 nums1 = [1,2,3,3], nums2 = [1,1,2,2]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);