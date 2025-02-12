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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return []
    }
    const result = new Map()
    const dfs = (node, level) => {
        if (result.get(level) === undefined) {
            result.set(level, [])
        }

        if (node !== null) {
            result.set(level, [...result.get(level), node.val])
        }

        if (node !== null && node.left !== null) {
            dfs(node.left, level + 1)
        }

        if (node !== null && node.right !== null) {
            dfs(node.right, level + 1)
        }
    }
    dfs(root, 0)
    // Big O (n) -> n = keys times
    const answer = []
    for (const [key, element] of result) {
        answer.push(element)
    }
    return answer
};