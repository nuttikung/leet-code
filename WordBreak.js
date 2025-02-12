/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // COMMENT: use FP programming
    return s.split("").reduce((accumulator, current) => wordDict.indexOf(accumulator + current) !== -1 ? '' : accumulator + current, '').length === 0
};

let start = Date.now();
// T1 Input: s = "leetcode", wordDict = ["leet","code"]
console.log(wordBreak("leetcode", ["leet", "code"]))
// T2 Input: s = "applepenapple", wordDict = ["apple","pen"]
console.log(wordBreak("applepenapple", ["apple", "pen"]))
// T3 Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
// T4  Input: s = "aaaaaaa", wordDict = ["aaaa","aaa"]
console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]))
// T5 
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);