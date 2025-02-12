// GCD in memory
const gcdMap = new Map()

// TODO: Make better version of GCD
const gcd = (num1, num2) => {
    if (num1 < num2 && gcdMap.get(`${num1}-${num2}`) !== undefined) {
        return gcdMap.get(`${num1}-${num2}`)
    }
    if (num1 > num2 && gcdMap.get(`${num2}-${num1}`)) {
        return gcdMap.get(`${num2}-${num1}`)
    }
    let min = num1 < num2 ? num1 : num2
    for (let i = min; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            if (num1 < num2) {
                gcdMap.set(`${num1}-${num2}`, i)
            } else {
                gcdMap.set(`${num2}-${num1}`, i)
            }
            return i
        }
    }
}

const matching = (nums = []) => {
    if (nums.length === 2) {
        return gcd(nums[0], nums[1])
    }
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        const first = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            const second = nums[j];
            console.log("🚀 ~ file: leetcode.js:35 ~ matching ~ second:", first, second)
            nums.splice(j, 1)
            nums.splice(i, 1)
            console.log(gcd(first, second))
            const x = [gcd(first, second), matching(nums)]
            console.log("🚀 ~ file: leetcode.js:38 ~ matching ~ x:", x)
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
    // const possible

    matching(nums)
};

let start = Date.now();
// T2 matrix = [[1,2],[2,2]]
maxScore([3, 4, 6, 8])
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);