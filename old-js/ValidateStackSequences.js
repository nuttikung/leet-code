/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    // No Array provide mean true in turn
    if (pushed.length === 0) {
        return true
    }
    const stack = []
    // // COMMENT: Push or Pop condition -> push when not equal pop when equal
    let isValid = true
    let pushVal = pushed.shift()
    let popVal = popped.shift()
    // Big(O) = n + m -> Time complexity = Linear
    while (popped.length > 0) {
        if (popVal !== pushVal && popVal !== stack[stack.length - 1] && pushVal === undefined) {
            isValid = false
            break;
        } else if (popVal === pushVal) {
            // Go next push
            pushVal = pushed.shift()
            popVal = popped.shift()
        } else if (popVal === stack[stack.length - 1]) {
            stack.pop()
            popVal = popped.shift()
        } else {
            stack.push(pushVal)
            pushVal = pushed.shift()
        }
    }
    return isValid
};

let start = Date.now();
// T1 pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
// T2 pushed = ([1, 2, 3, 4, 5], popped = [5, 4, 3, 2, 1]
console.log(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))
// T3 pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]))
// T4 pushed = [], popped = []
console.log(validateStackSequences([], []))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);