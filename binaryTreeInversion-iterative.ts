/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const iter: TreeNode[] = [root];
    let left: TreeNode | null;
    while (iter.length > 0) {
        const node = iter.pop()!;
        left = node.left;
        node.left = node.right;
        node.right = left;
        node.left && iter.push(node.left);
        node.right && iter.push(node.right);
    }
    return root;
};
