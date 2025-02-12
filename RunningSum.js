/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums = []) {
    // Using prefix sum or sum as a same way
    let sum = 0
    const result = []
    nums.forEach(element => {
        sum += element
        result.push(sum)
    });
    return result
};


let start = Date.now();
// T1 nums = [1,2,3,4]
console.log(runningSum([1, 2, 3, 4]))
// T2 nums = [1,1,1,1,1]
console.log(runningSum([1, 1, 1, 1, 1]))
// T3 nums = [3,1,2,10,1]
console.log(runningSum([3, 1, 2, 10, 1]))
// T4 nums = [0]
console.log(runningSum([0]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);