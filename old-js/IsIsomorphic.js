/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s = '', t = '') {
    const temp = []
    const dict = new Map()
    for (let i = 0; i < s.length; i++) {
        if ((dict.get(s[i]) !== undefined && dict.get(s[i]) !== t[i]) || (dict.get(s[i]) === undefined && temp.indexOf(t[i]) !== -1)) {
            return false
        } else if (dict.get(s[i]) === undefined && temp.indexOf(t[i]) === -1) {
            dict.set(s[i], t[i])
            temp.push(t[i])
        } else {
            continue
        }
    }
    return true
};


let start = Date.now();
// T1 s = "egg", t = "add"
console.log(isIsomorphic("egg", "add"))
// T2 s = "foo", t = "bar"
console.log(isIsomorphic("foo", "bar"))
// T3 s = "paper", t = "title"
console.log(isIsomorphic("paper", "title"))
// T4 s = "badc", t = "baba"
console.log(isIsomorphic("badc", "baba"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);