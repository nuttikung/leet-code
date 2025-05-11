/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // COMMENT: find Max for memo 
    // Big(O) = n + n
    const maxCandy = Math.max(...candies)
    return candies.map((candy) => candy + extraCandies >= maxCandy)
};

let start = Date.now();
// T1 candies = [2,3,5,1,3], extraCandies = 3
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
// T2 candies = [4,2,1,1,2], extraCandies = 1
console.log(kidsWithCandies([2, 3, 5, 1, 3], 1))
// T3 candies = [12,1,12], extraCandies = 10
console.log(kidsWithCandies([12, 1, 12], 10))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);