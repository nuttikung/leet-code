/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const patternKeys = pattern.split("")
    const words = s.split(" ")
    // Map for dictionaries
    const dictionaries = new Map()
    // Array for word memories
    const memories = []
    for (let index = 0; index < patternKeys.length; index++) {
        const patternC = patternKeys[index]
        const word = words[index]
        // Not in dict & memories
        if (dictionaries.get(patternC) === undefined && memories.indexOf(word) === -1) {
            // add it to both
            dictionaries.set(patternC, word)
            memories.push(word)
        }
    }
    const result = []
    patternKeys.forEach((c) => {
        if (dictionaries.get(c) !== undefined) {
            result.push(dictionaries.get(c))
        } else {
            result.push('-*-')
        }
    })
    return result.join(' ') === s
};

let start = Date.now();
// T1 pattern = "abba", s = "dog cat cat dog"
console.log(wordPattern("abba", "dog cat cat dog"))
// T2 pattern = "abba", s = "dog cat cat fish"
console.log(wordPattern("abba", "dog cat cat fish"))
// T3 pattern = "aaaa", s = "dog cat cat dog"
console.log(wordPattern("aaaa", "dog cat cat dog"))
// T4 pattern = "abba", s = "dog dog dog dog" -> Problem
console.log(wordPattern("abba", "dog dog dog dog"))
// T5 pattern = "abc", s = "b c a"
console.log(wordPattern("abc", "b c a"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);