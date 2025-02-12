/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const total = nums.reduce((accumulator, current) => accumulator += current, 0)
    let leftSum = 0
    let idx = -1
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === total - (nums[i] + leftSum)) {
            idx = i
            break;
        } else {
            leftSum += nums[i]
        }
    }
    return idx
};

let start = Date.now();
// T1 nums = [1,7,3,6,5,6]
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
// T2 nums = [1,2,3]
console.log(pivotIndex([1, 2, 3]))
// T3 nums = [2,1,-1]
console.log(pivotIndex([2, 1, -1]))
// T4 nums = [0]
console.log(pivotIndex([80]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);