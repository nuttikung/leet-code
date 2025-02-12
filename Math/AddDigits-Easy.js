/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // confirm 1 digit
    if (parseInt(num) < 10) {
        return num
    }
    return addDigits(`${num}`.split("").reduce((accumulator, current) => accumulator += parseInt(current), 0))
};

let start = Date.now();
// T1 num = 38
console.log(addDigits(38))
// T2 num = 0
console.log(addDigits(0))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);