/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    // COMMENT: Make path into array  Big(O) = n
    const pathArray = path.split("/").filter(value => value !== '')
    // Use stack to combine path for the result
    const stack = []
    // COMMENT: Iterate array of path Big(O) = n or 2n(worst)
    pathArray.forEach(element => {
        if (element === '..') {
            stack.pop()
        } else if (element !== ".") {
            stack.push(element)
        } else {
            // just ignore (no need this just put)
        }
    });
    // Big(O) = n+1
    // Total Big(O) = n + 2n + n+ 1 = 4n+1 -> Linear Data = Time
    return "/" + stack.join("/")
};

let start = Date.now();
// T1 path = "/home/"
console.log(simplifyPath("/home/"))
// T2 path = "/../"
console.log(simplifyPath("/../"))
// T3 path = "/home//foo/"
console.log(simplifyPath("/home//foo/"))
// T4 path = "/home/.../"
console.log(simplifyPath("/home/.../"))
// T5 path = "/a/./b/../../c/"
console.log(simplifyPath("/a/./b/../../c/"))
// T6 path = "/../../../../../a"
console.log(simplifyPath("/../../../../../a"))
// T7 path = "/a//b//c//////d"
console.log(simplifyPath("/a//b//c//////d"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);