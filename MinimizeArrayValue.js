/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
    let prefixSum = 0
    let answer = 0
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
        if (i !== 0) {
            if (Math.ceil(prefixSum / (i + 1)) > answer) {
                answer = Math.ceil(prefixSum / (i + 1))
            }
        } else {
            answer = nums[i]
        }
    }
    return answer
};



// TODO: Optimize due to time exceed
let start = Date.now();
// T1 nums = [3,7,1,6]
// console.log(minimizeArrayValue([3, 7, 1, 6]))
// T2 nums = [10,1]
// console.log(minimizeArrayValue([10, 1]))
// T3 nums = [13,13,20,0,8,9,9]
// console.log(minimizeArrayValue([13, 13, 20, 0, 8, 9, 9]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);