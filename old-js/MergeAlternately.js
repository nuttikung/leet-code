/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    // COMMENT: do for min range
    const minLength = word1.length - word2.length > 0 ? word2.length : word1.length
    const result = []
    // Big(O) = n , n is min length
    for (let i = 0; i < minLength; i++) {
        result.push(word1.charAt(i), word2.charAt(i))
    }
    // Big(O) + m when m = non dupe or longer text. Total = linear  (O) = n + m
    if (word1.length > minLength) {
        result.push(word1.slice(minLength))
    }
    if (word2.length > minLength) {
        result.push(word2.slice(minLength))
    }
    return result.join("")
};

let start = Date.now();
// T1 word1 = "abc", word2 = "pqr"
console.log(mergeAlternately("abc", "pqr"))
// T2 word1 = "ab", word2 = "pqrs"
console.log(mergeAlternately("ab", "pqrs"))
// T3 word1 = "abcd", word2 = "pq"
console.log(mergeAlternately("abcd", "pq"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);