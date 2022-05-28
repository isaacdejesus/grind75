/*
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    };
};*/
//works on leetcode
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const helper = (node: TreeNode | null): TreeNode | null => {
        if(p.val > node.val && q.val > node.val) {
            return helper(node.right);
        }
        if(p.val < node.val && q.val < node.val) return helper(node.left);
        return node;
    }
    return helper(root);
};

//also works on leetcode -__
const LCA = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
    if(!root)
        return null;
    if(p.val > root.val && q.val > root.val)
        return lowestCommonAncestor(root.right, p, q);
    if(p.val < root.val && q.val < root.val)
        return lowestCommonAncestor(root.left, p, q);
    return root;
};

