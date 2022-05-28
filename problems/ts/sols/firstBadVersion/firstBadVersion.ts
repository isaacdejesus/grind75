var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let start = 0;
        let end = n;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2 )
            
            if(isBadVersion(mid) && !isBadVersion(mid - 1)) return mid
               
            else if (isBadVersion(mid) && isBadVersion(mid - 1)) {
                end = mid - 1;
            }
            else if (!isBadVersion(mid)) {
                start = mid + 1;
            }
        }
    };
};
