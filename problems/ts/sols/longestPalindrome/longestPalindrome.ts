const longestPalindrome = (s: string): number => {
    let sum = 0;
    if(s.length === 0)
        return sum;
    const map = new Map();
    for (let char of s) {
        let count = map.get(char) || 0;
        map.set(char, ++count);
    }
    map.forEach((value: number, key: number) => {
        sum += Math.floor(value / 2) * 2;
    });
    return sum < s.length ? ++sum : sum;
}
