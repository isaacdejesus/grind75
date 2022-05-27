"use strict";
//sliding window
const maxProfit = (prices) => {
    if (prices.length < 2)
        return 0;
    let max = 0;
    let buyIndex = 0;
    let sellIndex = 1;
    while (sellIndex < prices.length) {
        const buyPrice = prices[buyIndex];
        const sellPrice = prices[sellIndex];
        if (sellPrice < buyPrice) {
            buyIndex = sellIndex;
            sellIndex = buyIndex + 1;
        }
        else {
            const profit = sellPrice - buyPrice;
            max = Math.max(max, profit);
            sellIndex++;
        }
    }
    return max;
};
const maxProfit2 = (prices) => {
    let prevLow = prices[0];
    let maxProfit = 0;
    prices.forEach((price) => {
        prevLow = Math.min(prevLow, price);
        maxProfit = Math.max(maxProfit, price - prevLow);
    });
    return maxProfit;
};
const maxProfit3 = (prices) => {
    let dip = Math.max(...prices);
    let maxProfit = 0;
    for (const todaysPrice of prices) {
        if (todaysPrice < dip)
            dip = todaysPrice;
        else if (todaysPrice - dip > maxProfit)
            maxProfit = todaysPrice - dip;
    }
    ;
    return maxProfit;
};
