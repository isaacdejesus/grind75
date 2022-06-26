const diameterOfBtree = (root: TreeNode | null): number =>{
    let res = [0];
    const dfs = (root: TreeNode | null) => {
        if(!root)
            return -1;
        let left= dfs(root.left);
        let right = dfs(root.right);
        res[0] = Math.max(res[0], 2 + left + right)
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return res[0];
}
