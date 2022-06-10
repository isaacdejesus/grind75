const hammingWeight = (n: number): number => {
    let res = 0;
    while ( n ){
        res += n % 2
        n = n >> 1;
    }
    return res;
}

const hammingWeight2 = (n: number): number => {
    let result = 0;
    while(n){
        n = n & (n -1);
        result += 1;
    }
    return result;
}
