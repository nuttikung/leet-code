/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const collect = []
    const dfs = (node) => {
        if (node) {
            collect.push(node.val)
        }
        if (node !== null && node.left !== null) {
            dfs(node.left)
        }
        if (node !== null && node.right !== null) {
            dfs(node.right)
        }
    }
    dfs(root1)
    dfs(root2)
    return collect.sort((a, b) => a - b)
};