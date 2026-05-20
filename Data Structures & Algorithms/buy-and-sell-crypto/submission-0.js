class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }

        let maxProfit = 0;
        let maxPriceSeen = prices[prices.length - 1];
        for (let i = prices.length - 2; i >= 0; i--){
            const profit = maxPriceSeen - prices[i];
            maxProfit = Math.max(maxProfit, profit);
            maxPriceSeen = Math.max(maxPriceSeen, prices[i]);
        }

        return maxProfit;
    }
}
