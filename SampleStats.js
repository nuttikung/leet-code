/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
    const numberChart = new Map()
    let max = -Number.MAX_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    let sum = 0
    let myCount = 0
    let mode = { key: -1, value: 0 }
    count.forEach((element, index) => {
        if (element !== 0) {
            sum += index * element
            myCount += element
            if (index > max) {
                max = index
            }
            if (index < min) {
                min = index
            }
            if (numberChart.get(index) === undefined) {
                numberChart.set(index, element)
            } else {
                // numberChart.set(element, numberChart.get(element) + 1)
            }
        }
    });
    let dupeCount = count
    let median = 0
    // find mode
    numberChart.forEach((value, key) => {
        if (mode.value < value) {
            mode = { key, value }
        }

        // if(dupeCount <= value){

        // }


    })

    const mean = sum / myCount
    console.log(mean)
    console.log(min)
    console.log(max)
    console.log(mode.key)
    console.log(numberChart)
};


sampleStats(
    [0, 4, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
)

// TODO: Optimize due to time exceed
let start = Date.now();
// T1 nums = [3,2,2,3], val = 3
// console.log(removeElement([3, 2, 2, 3], 3))
// T2 nums = [0,1,2,2,3,0,4,2], val = 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
// T3 people = [3,5,3,4], limit = 5
// console.log(numRescueBoats([3, 5, 3, 4], 5))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);