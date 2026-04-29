class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicateHash(nums) {
        const seen = new Set();

        for (let i=0; i < nums.length; i++){
            if (seen.has(nums[i])) {
                return true;
            }
            seen.add(nums[i])
        }
        return false;
    }


    hasDuplicate(nums) {
       // 1. sort the array, using .sorted() 
       // 2. loop, checking if any adjacent elements are the same
       const sorted = nums.sort();

       for (let i=0; i < sorted.length - 1; i++){
            const curr = sorted[i];
            const next = sorted[i + 1];

            if (curr == next) {
                return true;
            }
       }
       return false;
    }
}
