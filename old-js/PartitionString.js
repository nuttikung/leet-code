/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let count = 0
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack.indexOf(s[i]) !== -1) {
            count += 1
            stack = []
        }
        stack.push(s[i])
    }
    return count + 1
};
// TODO: Optimize due to time exceed
let start = Date.now();
// T1 s = "abacaba"
console.log(partitionString("abacaba"))
// T2 s = "ssssss"
console.log(partitionString("ssssss"))
// T3 s = "abcdefg"
console.log(partitionString("abcdefg"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);