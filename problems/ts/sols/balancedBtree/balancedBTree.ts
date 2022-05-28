const isBalanced = (root: TreeNode | null): boolean =>{
    function helper(node: TreeNode | null): number {
        if(!node)
            return 0;
        let l = helper(node.left);
        let r = helper(node.right);
        if(l < 0 || r < 0 || Math.abs(l-r) > 1) return -1;
        return Math.max(l,r) + 1;
    };
    return helper(root) !== -1;
};

const isBalanced2 = (root: TreeNode | null): boolean => {
    if(!root)
        return true;
    let leftDepth: number = getTreeDepth(root.left);
    let rightDepth: number = getTreeDepth(root.right);
    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced2(root.right) && isBalanced2(root.left);
};

const getTreeDepth = (node: TreeNode | null): number => {
    if(!node)
        return 0;
    return 1 + Math.max(getTreeDepth(node.right), getTreeDepth(node.left));
}
