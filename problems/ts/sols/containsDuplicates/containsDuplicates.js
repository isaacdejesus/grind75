var containsDuplicate = function (nums) {
    var set = new Set();
    for (var item in nums) {
        if (set.has(nums[item]))
            return true;
        set.add(nums[item]);
    }
    ;
    return false;
};
