/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s = '', t = '') {
    if (s.length > t.length) {
        return false
    }
    const sArr = s.split("")
    let comp = sArr.shift()
    for (let i = 0; i < t.length; i++) {
        if (t.charAt(i) === comp) {
            comp = sArr.shift()
        }
    }
    return sArr.length === 0 && comp === undefined
};

let start = Date.now();
// T1 s = "abc", t = "ahbgdc"
console.log(isSubsequence("abc", "ahbgdc"))
// T2 s = "axc", t = "ahbgdc"
console.log(isSubsequence("axc", "ahbgdc"))
// T3 s = 'b', t = 'c'
console.log(isSubsequence("b", "c"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);