//using boyer moore algo
const majorityElement = (nums: number[]): number => {
    const N = nums.length;
    let candidate = nums[0];
    let votes = 1; 
    for( let i = 1; i < N; i++){
        if(votes === 0)
            candidate = nums[i];
        votes += nums[i] === candidate ? 1 : -1;
    }
    return candidate;
}
