class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, t) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            let curr = nums[l] + nums[r];
            if (curr === t) {
                return [l + 1, r + 1];
            }
            if (curr < t) {
                l++;
            } else {
                r--;
            }
        }
        return [0, 0];
    }
}
