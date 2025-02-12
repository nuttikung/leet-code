/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const data = s.split('')
    const list = {}
    data.forEach(element => {
        if (list[element] === undefined) {
            list[element] = true
        } else {
            list[element] = false
        }
    });
    const listKeys = Object.keys(list)
    for (let index = 0; index < listKeys.length; index++) {
        if (list[listKeys[index]] === true) {
            return data.findIndex((val) => val === listKeys[index])
        }
    }
    return -1
};

let start = Date.now();
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
