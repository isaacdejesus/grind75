"use strict";
const twoSum = (nums, target) => {
    const values = new Map();
    for (let i = 0; i < nums.length; i++) {
        const targetMatch = target - nums[i];
        const matchingVal = values.get(targetMatch);
        if (matchingVal !== undefined)
            return [matchingVal, i];
        values.set(nums[i], i);
    }
    ;
    return [0];
};
const twosum = (nums, target) => {
    const len = nums.length;
    const hash = new Map([[nums[0], 0]]);
    for (let i = 1; i < len; i++) {
        if (hash.has(target - nums[i])) {
            const val = hash.get(target - nums[i]);
            if (val !== undefined)
                return [val, i];
        }
        else
            hash.set(nums[i], i);
    }
    return [];
};
const arr = [3, 4, 5, 1];
console.log(twoSum(arr, 4));
