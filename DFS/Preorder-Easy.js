/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const dfs = (node, collection = []) => {
        if (node === null) {
            return collection
        }
        if (node?.val !== null) {
            collection = [...collection, node.val]
        }
        if (node.children) {
            collection = [...collection, node.children.map((self => dfs(self)))]
        }
        return collection
    }
    return dfs(root, []).flat(9999)
};