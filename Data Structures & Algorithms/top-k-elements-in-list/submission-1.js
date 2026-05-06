class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Goal O(n) in both time and space
        // Use a hashmap as a histogram, sort for top K
        // Loop through keeping track of element counts
        // Once histogram is constructed, do linear search for top k
        // Last part could be optimised with a priority queue want to get this approach working first

        const map = new Map(); // <number, number>
        for (let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
        }

        // Sort map array by second element 
        // convert to array
        const mapArray = Array.from(map.entries());

        // sort
        const sortedMapArray = mapArray.sort((a, b) => b[1] - a[1]);

        // get top K
        let i = 0;
        const res = [];
        while (i < k) {
            res.push(sortedMapArray[i][0]);
            i++
        }
        return res;
    }
}
