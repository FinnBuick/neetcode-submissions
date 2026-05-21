class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        for (const num of set) {
            if (!set.has(num - 1)) {
                let currLen = 1;
                let curr = num;
                while (set.has(curr + 1)) {
                    curr++;
                    currLen++;
                }
                max = Math.max(max, currLen)
            }
        }
        return max;
    }
}
