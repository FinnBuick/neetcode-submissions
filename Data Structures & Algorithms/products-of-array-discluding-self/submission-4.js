class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = [1];
        for (let i = 1; i < nums.length; i++) {
            left.push(left[i - 1] * nums[i - 1]);
        }
        const right = [1];
        for (let i = nums.length - 2; i >= 0; i--) {
            right.unshift(right[0] * nums[i + 1]);
        }

        return left.map((x, i) => x * right[i]);
    }
}
