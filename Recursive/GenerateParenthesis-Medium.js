/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ans = []
    const builder = (word, len) => {
        if (word === '') {
            builder(word + '(', len)
        } else if (word.length < len) {
            const wordList = word.split('')
            if (wordList.filter((char) => char === '(').length < n) {
                builder(word + '(', len)
            }
            if (wordList.filter((char) => char === '(').length > wordList.filter((char) => char === ')').length) {
                builder(word + ')', len)
            }
        } else {
            if (word.split('').filter((char) => char === '(').length === n) {
                ans.push(word)
            }
        }
    }
    builder('', n * 2)
    return ans
};

let start = Date.now();
console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);