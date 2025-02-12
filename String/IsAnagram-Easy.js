/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};

let start = Date.now();
console.log(isAnagram("anagram", "nagaram"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);