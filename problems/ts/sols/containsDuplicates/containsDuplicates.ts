const containsDuplicate = (nums: number[]): boolean => {
    const set = new Set();
    for(const item in nums){
        if(set.has(nums[item]))
            return true;
        set.add(nums[item]);
    };
    return false;
};
