/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const history = new Map()
    s.split("").map((value) => {
        if (history.get(value) === undefined) {
            history.set(value, 0)
        }
        history.set(value, history.get(value) + 1)
    })
    let hasUnique = false
    let sum = 0
    history.forEach(element => {
        if (element > 2 && element % 2 !== 0) {
            sum += element - 1
            hasUnique = true
        } else if (element % 2 === 0) {
            sum += element
        } else {
            hasUnique = true
        }
    });
    return hasUnique ? sum + 1 : sum
};

let start = Date.now();
// T1 s = "abccccdd"
console.log(longestPalindrome("abccccdd"))
// T2 s = "a"
console.log(longestPalindrome("a"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);



