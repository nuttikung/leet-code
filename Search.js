/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let resultIndex = -1
    let Left = 0
    let Right = nums.length
    let Middle = Math.floor((Left + Right) / 2)
    while (Left <= Right) {
        if (target === nums[Middle]) {
            resultIndex = Middle
            break;
        }
        if (target > nums[Middle]) {
            Left = Middle + 1
            Middle = Math.floor((Left + Right) / 2)
        } else {
            Right = Middle - 1
            Middle = Math.floor((Left + Right) / 2)
        }
    }
    return resultIndex
};
// TODO: Optimize due to time exceed
let start = Date.now();
// // 1
// search([-1, 0, 3, 5, 9, 12], 20)
// // 2
// search([-1, 0, 3, 5, 9, 12], 2)
// // 3
// search([1, 2, 5, 10, 14, 19, 23], 23)
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
