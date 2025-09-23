# invert-binary-tree-iterative
A highly optimised iterative binary tree inversion function written in TypeScript.

[Recursive Version](https://github.com/merrittbrody06/invert-binary-tree-recursive)

# Premise
This iterative function minimises stack memory and instead uses heap memory to iterate over a binary tree and invert each node and its children.

# Complexity
- Time complexity:

| Test | Iterative |
|:-|:-|
| Complexity | $$O(n)$$ |
| Per-node Runtime Overhead | ~10-30ns |
| JavaScript Optimisations | fully optimised |
| Deep Trees | Stable & safe for large datasets |
| Shallow Trees | Marginally slower (due to array handling) |

- Space complexity:

| Test | Iterative (8B per node) |
|:-|:-|
| Complexity | $$O(h)$$ <span style="color:lightblue">where $$h$$ represents the tree height</span> |
| Unbalanced Tree (1,000 depth) | 8KB (1000 × 8B) |
| Unbalanced Tree (10,000 depth) | 80KB (10000 × 8B) |
| Balanced Tree (1,000 nodes / ~10 depth) | 80B (10 × 8B) |

# Code
```typescript []
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
```

# Closing Thoughts
I appreciate you taking the time to reveiw this solution to the famous binary tree inversion problem. If you have any questions, concerns, or comments, feel free to reach out to me. I always welcome further optimisations if there are any I have missed! I do want to mention that I am aware I could have further optimised the iterative function by pre-defining an array size instead of manipulating the array during runtime; however, this is one of the optimisations I would only apply in a real use-case scenario that made sense to do so. Thank you again, and good luck on your projects!
