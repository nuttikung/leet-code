/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    // Vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const clone = [...s.split('').slice(k)]
    const current = [...s.split('').slice(0, k)]
    let ans = current.filter(c => vowels.has(c)).length
    let max = ans
    while (clone.length > 0) {
        if (vowels.has(current.shift())) {
            ans -= 1
        }
        const charToAdd = clone.shift()
        current.push(charToAdd)
        if (vowels.has(charToAdd)) {
            ans += 1
        }
        if (ans > max) {
            max = ans
        }
    }
    return max
};

let start = Date.now();
// T1 s = "abciiidef", k = 3
// console.log(maxVowels("abciiidef", 3))
// T2 
console.log(maxVowels("weallloveyou", 7))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);