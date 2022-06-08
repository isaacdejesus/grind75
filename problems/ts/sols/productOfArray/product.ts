const productOfArray = (nums: number[]): number[] => {
    const result: number[] = new Array(nums.length).fill(1);
    let prefix: number = 1;
    for(const i in nums)
    {
        result[i] = prefix;
        console.log("result: ", result[i])
        prefix *= nums[i];
        console.log("prefix: ",prefix);
    }
    let postfix: number = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= postfix;
        console.log("result: ", result[i])
        postfix *= nums[i];
        console.log("prefix: ",prefix);
    }
    return result;
}

const res = productOfArray([1,2,3,4]);
console.log(res);
