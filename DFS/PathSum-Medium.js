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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const ans = []
    const dfs = (node, track = [], sum = 0, target) => {
        if (node !== null && node.left === null && node.right === null && sum + node.val === target) {
            ans.push([...track, node.val])
        }
        if (node !== null && node.left !== null) {
            dfs(node.left, [...track, node.val], sum + node.val, target)
        }
        if (node !== null && node.right !== null) {
            dfs(node.right, [...track, node.val], sum + node.val, target)
        }
    }
    dfs(root, [], 0, targetSum)
    return ans
};