/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells = [], potions = [], success = 0) {
    let sortedSpells = [...spells].sort((a, b) => a - b)
    let sortedPortion = [...potions].sort((a, b) => a - b)
    const strengthArray = []
    // Memoization
    const Memo = new Map()
    const result = []
    // Big O(potions)
    sortedSpells.forEach(element => {
        strengthArray.push(sortedPortion.map((a) => (a * element)))
    });
    // หาคำตอบใส่ Memo
    let Right = sortedPortion.length - 1
    let count = 0
    // Big O(potions)
    strengthArray.forEach((element, index) => {
        while (Right >= 0) {
            const elem = element[Right];
            if (Right === 0) {
                // do something...
                if (elem >= success) {
                    count += 1
                    Right -= 1
                } else {
                    Memo.set(sortedSpells[index], count)
                    // Memo[`${sortedSpells[index]}`] = count
                    break;
                }
            } else if (elem < success) {
                Memo.set(sortedSpells[index], count)
                // Memo[`${sortedSpells[index]}`] = count
                break;
            } else {
                count += 1
                Right -= 1
            }
        }
        if (Right === -1) {
            Memo.set(sortedSpells[index], count)
            // Memo[`${sortedSpells[index]}`] = count
        }
    });
    // Big O(potions)
    spells.forEach(value => {
        result.push(Memo.get(value))
    });
    return result
};