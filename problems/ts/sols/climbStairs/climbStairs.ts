const climbStairs = (n: number): number => {
    let memo = [0, 1, 2];
    if(n <=2) 
        return n;
    for(let i = 3; i <= n; i ++)
        memo[i] = memo[i - 1] + memo[i - 2];
    return memo[n];
};

//using memoization
let cache = new Map();
const climbStairs2 = (n: number): number => {
    if(n <=3)
        return n;
    let f = cache.has(n-1) ? cache.get(n-1) : climbStairs2(n-1);
    let s = cache.has(n-2) ? cache.get(n-2) : climbStairs2(n-2);
    let r = f + s;
    cache.set(n, r);
    return r;
};

