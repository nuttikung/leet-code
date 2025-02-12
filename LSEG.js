
const printStar = (num = 0) => {
    let result = ""
    let resultAtt = []
    // Print L -> R
    for (let i = 0; i < Math.ceil(num / 2); i++) {
        for (let j = 0; j <= i; j++) {
            // console.log("i : ", i, " j : ", j)
            if (j === i) {
                result = result + "*"
                resultAtt = [...resultAtt, result]
                result = ''
            } else {
                result = result + ' '
            }
        }
    }
    for (let i = 0; i < num; i++) {
        if (i >= Math.ceil(num / 2)) {
            console.log(resultAtt[num - i - 1])
        } else {
            console.log(resultAtt[i])
        }

    }
    return
}


// TODO: Optimize due to time exceed
let start = Date.now();
// T1
console.log('---T1---')
printStar(0)
console.log('---T1---')
// T2
console.log('---T2---')
printStar(7)
console.log('---T2---')
// T3
console.log('---T3---')
printStar(10)
console.log('---T3---')
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);