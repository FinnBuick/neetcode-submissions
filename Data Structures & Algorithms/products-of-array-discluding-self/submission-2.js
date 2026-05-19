class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Need to create two arrays
        // 1. all numbers multiplied by everything to the right
        // 2. all numbers multiplied by everything to the left
        // Then return the product of both arrays
        
        const left = [];
        for (let i = 0 ; i < nums.length; i++) {
            const leftProduct = (i === 0 ? 1 : left[i - 1] * nums[i - 1]);
            left.push(leftProduct);
        }

        const right = [];
        for (let i = nums.length - 1; i >= 0; i--) {
            const rightProduct = (i === nums.length - 1 ? 1 : right[0] * nums[i + 1]);
            right.unshift(rightProduct);
        }

        return left.map((el, i) => el * right[i]);
    }
}
