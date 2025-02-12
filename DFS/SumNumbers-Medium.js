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
var sumNumbers = function (root) {
    if (root === null) {
        return 0
    }
    let sum = 0
    const dfs = (node, previous) => {
        if (node.left === null && node.right === null) {
            sum += parseInt(previous + node.val)
        }
        if (node !== null && node.left !== null) {
            dfs(node.left, previous + node.val)
        }
        if (node !== null && node.right !== null) {
            dfs(node.right, previous + node.val)
        }
    }
    dfs(root, '')
    return sum
};