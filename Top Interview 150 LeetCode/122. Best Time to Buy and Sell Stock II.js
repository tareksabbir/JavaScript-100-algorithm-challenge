/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    // Iterate through prices and capture every profitable transaction
    for (let i = 1; i < prices.length; i++) {
        // If the price goes up, we can make a profit by buying at i-1 and selling at i
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};