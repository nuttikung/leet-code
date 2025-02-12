/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const memo = new Map()
    let ans
    nums.map((value) => {
        if (memo.get(value) === undefined) {
            memo.set(value, 1)
        } else {
            memo.set(value, memo.get(value) + 1)
        }
    })
    memo.forEach((value, key) => {
        if (value === 1) {
            ans = key
        }
    })
    memo.clear()
    return ans
};

let start = Date.now();
// T1 nums = [2,2,1]
console.log(singleNumber([2, 2, 1]))
// T2 nums = [4,1,2,1,2]
console.log(singleNumber([4, 1, 2, 1, 2]))
// T3 nums = [1]
console.log(singleNumber([1]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);