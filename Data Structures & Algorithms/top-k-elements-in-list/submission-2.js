class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Create histogram, convert to array of arrays, get top k values
        // Complexity time = O(nlogn) (sorting), space = O(n)

        const map = new Map(); // <number, number>

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
        }

        const array = Array.from(map.entries());
        const sorted = array.sort((a, b) => b[1] - a[1]);

        const res = [];
        let i = 0;
        while (i < k) {
            res.push(sorted[i][0]);
            i++;
        }
        return res;
    }
}
