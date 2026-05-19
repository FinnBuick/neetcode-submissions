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
        
        const left = [1];
        for (let i = 1 ; i < nums.length; i++) {
            const leftProduct = left[i - 1] * nums[i - 1];
            left.push(leftProduct);
        }

        const right = [1];
        for (let i = nums.length - 2; i >= 0; i--) {
            const rightProduct = right[0] * nums[i + 1];
            right.unshift(rightProduct);
        }

        return left.map((el, i) => el * right[i]);
    }
}
