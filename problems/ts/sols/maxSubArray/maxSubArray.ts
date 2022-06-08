const maxSubArray = (nums: number[]): number => {
    let local = 0;
    let global = -Infinity;
    for(const num of nums){
        local = Math.max(num, local + num);
        if(local > global) 
        {global = local};
    };
    return global;
};
const maxSubarray = (nums: number[]): number => {
    let maxSub = nums[0];
    let curSum: number = 0;
    for(let i = 0; i <= nums.length - 1; i++){
        if (curSum < 0)
            curSum = 0;
        curSum += nums[i];
        maxSub = Math.max(maxSub, curSum);
    }
    return maxSub;
}
