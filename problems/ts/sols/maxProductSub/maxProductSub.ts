//DP
const maxProduct = (nums: number[]): number => {
    let res = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;
    for( let i = 0; i < nums.length; i++ ){
        if (nums[i] === 0)  {
            curMin = 1;
            curMax = 1;
            continue;
        }
        let tmp = curMax * nums[i];
        curMax = Math.max(nums[i] * curMax, nums[i] * curMin, nums[i]);
        curMin = Math.min(tmp, nums[i] * curMin, nums[i]);
        res = Math.max(res, curMax);
    }
    return res;
}
