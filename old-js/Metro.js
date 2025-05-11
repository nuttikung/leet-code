const testcases = require("./Subway-testcases");

const T1 = testcases.T1
const T2 = testcases.T2

// route from-> to
// section

// [
// {
//   type: drive,
// stations : [
// {  id:1 ,name: "..." },
// {  id:3 ,name: "..." },
//   ]
// },
// {
//   type: 'transfer',
//   stations: [
//     { id: 3, name: 'Phayathai' },
//     { id: 39, name: 'Phayathai(LG)' }
//   ]
// }
// ]


// FP function to transform data station into section 
// const section = {
//     type: 'drive' | 'transfer',
//     stations:  station[]
// }

const getJourney = (route = []) => {
    let journey = []
    let stack = []
    let currentLine = ''
    for (let i = 0; i < route.length; i++) {
        if (currentLine === '') {
            currentLine = route[i].line
            stack.push(route[i])
        } else if (i === route.length - 1) {
            if (currentLine === route[i].line) {
                stack.push(route[i])
                journey.push({ type: 'drive', stations: stack })

            } else if (stack.length > 1) {
                journey.push({ type: 'drive', stations: stack })
                journey.push({ type: 'transfer', stations: [route[i - 1], route[i]] })
            }
        } else {
            if (currentLine !== route[i].line) {
                // change line detect
                if (stack.length > 1) {
                    journey.push({ type: 'drive', stations: stack })
                    journey.push({ type: 'transfer', stations: [route[i - 1], route[i]] })
                    currentLine = route[i].line
                    stack = [route[i]]
                } else {
                    // stack length === 1
                    journey.push({ type: 'transfer', stations: [route[i - 1], route[i]] })
                    currentLine = route[i].line
                    stack = [route[i]]
                }
            } else {
                stack.push(route[i])
            }
        }
    }
    return journey
}


console.log("T1 : ", JSON.stringify(getJourney(T1), null, 2))
// console.log("T2 : ", getJourney(T2))



let start = Date.now();
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);