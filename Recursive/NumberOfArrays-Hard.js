// COMMENT: Time Exceed
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function (s, k) {
    // Doing logical
    const memo = new Map()
    const builder = (nums = []) => {
        // condition to do
        if (nums.find(value => value.charAt(0) === '0' || value.length > `${k}`.length || parseInt(value) > k) === undefined && memo.get(nums.join('-')) === undefined) {
            memo.set(nums.join('-'), true)
        } else {
            memo.set(nums.join('-'), false)
        }
        // Big (O) n-1 time on array
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i].charAt(0) !== '0' && parseInt(nums[i]) <= k) {
                const temp = [[...nums].slice(0, i), [nums[i] + nums[i + 1]], [...nums].slice(i + 2)].flat()
                if (memo.get(temp.join('-')) === undefined) {
                    builder(temp)
                }
            }
        }
    }
    const start = s.split("")
    builder(start)
    let ans = 0
    for (const [key, value] of memo) {
        if (value) {
            ans++
        }
    }
    return ans
};

let start = Date.now();
// T1 s = "1000", k = 10000
// console.log(numberOfArrays("1000", 10000))
// T2 s = "1000", k = 10
// console.log(numberOfArrays("1000", 10))
// T3 s = "1317", k = 2000
// console.log(numberOfArrays("1317", 2000))
// T4 s = "2020", k = 30
// console.log(numberOfArrays("2020", 30))
// T5 s = "1111111111111", k = 1000000000
// console.log(numberOfArrays("1111111111111", 1000000000))
// T6 s = "604516296181603152696", k = 696
console.log(numberOfArrays("604516296181603152696", 696))
// T7 s = "1317", k = 2000
// console.log(numberOfArrays("1317", 2000))
// T8 s = "1234567890", k = 90
// console.log(numberOfArrays("1234567890", 90))

let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);



