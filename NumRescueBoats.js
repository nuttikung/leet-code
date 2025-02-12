/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people = [], limit = 0) {
    // sorting people
    let totalBoat = 0
    let clonePeople = [...people].sort((a, b) => a - b)
    let Left = 0
    let Right = clonePeople.length - 1
    while (Left <= Right) {
        if (clonePeople[Left] + clonePeople[Right] <= limit) {
            Left += 1
            Right -= 1
        } else {
            Right -= 1
        }
        totalBoat += 1
    }
    return totalBoat
};