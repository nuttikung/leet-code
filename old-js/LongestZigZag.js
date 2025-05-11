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
var longestZigZag = function (root) {
    let max = 0
    const dfs = (start, direction = '', count = 0) => {
        if (direction === '') {
            if (start.left !== null) {
                dfs(start.left, 'left', count + 1)
            }
            if (start.right !== null) {
                dfs(start.right, 'right', count + 1)
            }
        } else {
            if (direction === 'left' && start.left !== null) {
                if (max < count) {
                    max = count
                }
                dfs(start.left, 'left', 1)
            }
            if (direction === 'left' && start.right !== null) {
                dfs(start.right, 'right', count + 1)
            }
            if (direction === 'right' && start.left !== null) {
                dfs(start.left, 'left', count + 1)
            }
            if (direction === 'right' && start.right !== null) {
                if (max < count) {
                    max = count
                }
                dfs(start.right, 'right', 1)
            }
            if (start.right === null || start.left === null) {
                if (max < count) {
                    max = count
                }
            }
        }
    }
    dfs(root, '', 0)
    // COMMENT: use total to find left -> right as a problem said we need zigzag path
    return max
};

let start = Date.now();
// T1 root = [1,1,1,null,1,null,null,1,1,null,1]
// T2 s = "axc", t = "ahbgdc"
// T3 s = 'b', t = 'c'
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);