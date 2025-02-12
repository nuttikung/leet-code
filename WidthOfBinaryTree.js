const bigIntMax = (...args) => args.reduce((m, e) => e > m ? e : m);
const bigIntMin = (...args) => args.reduce((m, e) => e < m ? e : m);
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    // Keep Map as Depth -> [order num]
    /**
     * example. 1 -> 1.  n
     *      2 -> 2,3. n*2, (n*2)
     *      3 -> 4,5,6,7.  means every left = n*2, same way right = (n*2) +1
     */
    const layer = new Map()
    const dfs = (node, orderNum, depth) => {
        if (layer.get(depth) === undefined) {
            layer.set(depth, [])
        }
        layer.set(depth, [...layer.get(depth), orderNum])
        if (node.left !== null) {
            dfs(node.left, (BigInt(orderNum) * BigInt(2)) - BigInt(1), depth + 1)
        }
        if (node.right !== null) {
            dfs(node.right, BigInt(orderNum) * BigInt(2), depth + 1)
        }
    }
    dfs(root, BigInt(1), 1)
    let max = 0
    console.log(layer)
    // After dfs we can use result from map by depth Max - Min + 1 
    layer.forEach((value, key, self) => {
        if (bigIntMax(...value) - bigIntMin(...value) + BigInt(1) > max) {
            max = bigIntMax(...value) - bigIntMin(...value) + BigInt(1)
        }
    });
    return max
};


let start = Date.now();
// T1 root = [1,1,1,null,1,null,null,1,1,null,1]
// T2 s = "axc", t = "ahbgdc"
// T3 s = 'b', t = 'c'
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);