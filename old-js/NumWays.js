const cartesian = (a = [], b = []) => {
    if (a.length === 0) {
        return b
    }
    if (b.length === 0) {
        return a
    }
    const cat = []
    a.forEach(element => {
        b.forEach(ele => {
            cat.push([element, ele])
        });
    });
    return cat
}

const wordSearch = (dictionary, search = '', row, column) => {
    let sum = 0
    if (row === search.length - 1) {
        return dictionary[row].filter((value, index) => value === search.charAt(row) && index >= column).length
    }
    for (let i = column; i < dictionary[row].length - 1; i++) {
        if (dictionary[row].indexOf(search.charAt(row)) === -1) {
            return 0
        } else {
            const element = dictionary[row][i]
            if (element === search.charAt(row)) {
                sum = sum + wordSearch(dictionary, search, row + 1, i + 1)
            }
        }
    }
    return sum
}

const wordBuilding = (words, search) => {
    // COMMENT: making 2d array as dictionary
    let dictionary = []
    // COMMENT: Dictionary in 2D array  <---- Dead here
    words.forEach((word, row) => {
        dictionary[row] = []
        word.split('').forEach((element, column) => {
            dictionary[row][column] = element
        });
    })
    // COMMENT: finding matrix word
    return wordSearch(dictionary, search, 0, 0, '')
}

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
    // TODO: Generate all dictionary
    let temp = []
    // COMMENT: Cartesian
    for (let i = 0; i < target.length; i++) {
        temp = cartesian(words, temp)
    }
    // COMMENT: Words building -> then find
    temp = temp.map((value) => value.flat(Infinity))
        .map(value => wordBuilding(value, target))
        .reduce((accumulator, current) => accumulator += current, 0)
    return temp
};


let start = Date.now();
// T1 words = ["acca","bbbb","caca"], target = "aba"
console.log(numWays(["acca", "bbbb", "caca"], "aba"))
// T2 words = ["abba","baab"], target = "bab"
console.log(numWays(["abba", "baab"], "bab"))
// T3 word = ["dcdccdabba","ddabcadabc","dbcdbaccba","cddadbdccd","adacdbaadb","cababaccbc","ccbccbaabd","bcdacdadcb","daddbbcaba","abbcaddbab","bbcdabadab","cabababccb","cadddddcba","accaabadbd","baabcabdbc","acbacdbbbc"]
// console.log(numWays(["dcdccdabba", "ddabcadabc", "dbcdbaccba", "cddadbdccd", "adacdbaadb", "cababaccbc", "ccbccbaabd", "bcdacdadcb", "daddbbcaba", "abbcaddbab", "bbcdabadab", "cabababccb", "cadddddcba", "accaabadbd", "baabcabdbc", "acbacdbbbc"], "dcdaad"))
// T4
// T5
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
