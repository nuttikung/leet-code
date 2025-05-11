/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const clone = s.split("")
    if (clone.length % 2 !== 0) {
        return false
    }
    const stack = []
    let valid = true
    for (let i = 0; i < clone.length; i++) {
        const pointer = clone[i];
        if (pointer === "(" || pointer === "[" || pointer === "{") {
            stack.push(pointer)
        } else if (pointer === ")") {
            const previous = stack.pop()
            if (previous !== "(") {
                valid = false
                break;
            }
        } else if (pointer === "]") {
            const previous = stack.pop()
            if (previous !== "[") {
                valid = false
                break;
            }
        } else {
            const previous = stack.pop()
            if (previous !== "{") {
                valid = false
                break;
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return valid
};

let start = Date.now();
// T1 s = "()"
console.log(isValid("()"))
// T2 s = "()[]{}"
console.log(isValid("()[]{}"))
// T3 s = "(]"
console.log(isValid("(]"))
// T4 s = "[](){}[({})]"
console.log(isValid("[](){}[({})]"))
// T5 s = "["
console.log(isValid("["))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);