/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s = '') {
    const dictionary = s.split(" ").filter(text => text !== '')
    // COMMENT if space text
    if (dictionary.length === 0) {
        return 0
    }
    return dictionary.pop().length
};


let start = Date.now();
// T1 s = "Hello World"
console.log(lengthOfLastWord("Hello World"))
// T2 s = "   fly me   to   the moon  "
console.log(lengthOfLastWord("   fly me   to   the moon  "))
// T3 s = "luffy is still joyboy"
console.log(lengthOfLastWord("luffy is still joyboy"))
// T4 s = " "
console.log(lengthOfLastWord(" "))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);