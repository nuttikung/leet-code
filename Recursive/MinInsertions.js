/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    // find subsequence palindrome     
    const lps = (i, j, s, memo) => {
        let answer = 0
        if (i === j && s[i] === s[j]) {
            return 1
        } else if (i === j && s[i] !== s[j]) {
            return 0
        } else if (i > j) {
            return answer
        } else if (memo.get(`${i}-${j}`) !== undefined) {
            return memo.get(`${i}-${j}`)
        } else if (s[i] === s[j]) {
            answer = 2 + lps(i + 1, j - 1, s, memo)
            memo.set(`${i}-${j}`, answer)
        } else {
            answer = answer + Math.max(lps(i, j - 1, s, memo), lps(i + 1, j, s, memo))
            memo.set(`${i}-${j}`, answer)
        }
        return answer
    }
    // Memoization because some of recursion use the result before as example is 
    // (0, n-1) -> (0,n-2) (1,n-1) -> (0, n-3) (1,n-1) (1,n-2) (2,n-1)  so if 1,n-1 in memo we return without doing repeatedly
    const memo = new Map()
    const answer = lps(0, s.length - 1, s.split(""), memo)
    return s.length - answer
};

let start = Date.now();
// T1 s = "zzazz"
console.log(minInsertions("zzazz"))
// T2 s = "mbadm"
console.log(minInsertions("mbadm"))
// T3 s = "leetcode"
console.log(minInsertions("leetcode"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);

