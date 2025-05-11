/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    /**
     * COMMENT: Logic -> Loop -> หา self === ตัวอื่น, ทำ abs, sum คืน (1st thinking)
     * TODO: Memoization ? if time exceed. Yes, it's needed.
     * What if all data is same?
     */
    const Memo = new Map()
    /**
     * COMMENT: Big(O) = n + (n * (x+y)), almost linear
     */
    nums.forEach((record, index) => {
        if (Memo.get(record) === undefined) {
            Memo.set(record, [index])
        } else {
            Memo.get(record).push(index)
        }
    });
    // Normal case
    return nums.map((record, index) => Memo.get(record).filter(source => source !== index).reduce((accumulator, current) => accumulator += Math.abs(index - current), 0))
    // COMMENT: Version 1  Big(O) = (n*n) = n^2
    // return nums.map((record, index) => {
    //     let sum = 0
    //     nums.forEach((element, idx) => {
    //         if (element === record && index !== idx) {
    //             sum += Math.abs(index - idx)
    //         }
    //     });
    //     return sum
    // })
};

let start = Date.now();
// T1 nums = [1,3,1,1,2]
// console.log(distance([1, 3, 1, 1, 2]))
// T2 nums = [0,5,3]
// console.log(distance([0, 5, 3]))
// T3 nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
console.log(distance([1, 2, 1, 2, 1, 2]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);