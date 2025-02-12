/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary = []) {
    return (salary.reduce((accumulator, current) => accumulator += current, 0) - (Math.max(...salary) + Math.min(...salary))) / (salary.length - 2)
};

let start = Date.now();
// T1 salary = [4000,3000,1000,2000]
console.log(average([4000, 3000, 1000, 2000]))
// T2 salary = [1000,2000,3000]
console.log(average([1000, 2000, 3000]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);