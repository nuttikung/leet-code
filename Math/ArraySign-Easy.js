/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.includes(0)) {
        return 0
    } else if (nums.filter((v) => v < 0).length % 2 !== 0) {
        return -1
    } else {
        return 1
    }
};

let start = Date.now();
// T1 nums = [-1,-2,-3,-4,3,2,1]
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]))
// T2 nums = [1,5,0,2,-3]
console.log(arraySign([1, 5, 0, 2, -3]))
// T3 nums = [-1,1,-1,1,-1]
console.log(arraySign([-1, 1, -1, 1, -1]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);