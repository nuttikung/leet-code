/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const clone = strs.sort((a, b) => a.length - b.length)
    if (clone.length === 0) {
        return ""
    }
    if (clone.length === 1) {
        return strs[0]
    }
    const start = strs[0].split('')
    return start.filter((value, startIdx) => startIdx <
        Math.min(...clone.map((element, index) => {
            let count = 0
            if (index === 0) {
                return element.length
            } else {
                for (let i = 0; i < element.length; i++) {
                    const char = element.charAt(i)
                    if (start[i] !== char) {
                        return count
                    }
                    count += 1
                }
                return count
            }
        }))
    ).join('')
};

let start = Date.now();
// T1 strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// T2 strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// T3 strs = [""]
console.log(longestCommonPrefix([""]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);