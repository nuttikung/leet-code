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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let ans = false
    const dfs = (node, sum) => {
        if (node !== null && node.left === null && node.right === null && node.val + sum === targetSum) {
            ans = true
        }
        if (node !== null && node.left !== null) {
            dfs(node.left, sum + node.val)
        }
        if (node !== null && node.right !== null) {
            dfs(node.right, sum + node.val)
        }
    }
    dfs(root, 0)
    return ans
};
let start = Date.now();
// T1 nums = [2,2,1]
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);