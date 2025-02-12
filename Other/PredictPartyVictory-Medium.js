const isUnique = (arr = []) => {
    return new Set(arr).size === 1
}

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let clone = senate.split("")
    // shift -> vote -> concat
    while (!isUnique(clone)) {
        const current = clone.shift()
        if (current === 'R') {
            if (clone.findIndex(v => v === 'D') !== -1) {
                clone.splice(clone.findIndex(v => v === 'D'), 1)
                clone.push(current)
            }
        } else {
            if (clone.findIndex(v => v === 'R') !== -1) {
                clone.splice(clone.findIndex(v => v === 'R'), 1)
                clone.push(current)
            }
        }
    }
    return clone[0] === 'R' ? 'Radiant' : 'Dire'
};

let start = Date.now();
// T1 senate = "RD"
console.log(predictPartyVictory("RD"))
// T2 senate = "RDD"
console.log(predictPartyVictory("RDD"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);