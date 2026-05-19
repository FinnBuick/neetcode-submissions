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
            const leftProduct = nums.slice(0, i).reduce((x, acc) => acc * x, 1);
            left.push(i !== 0 ? leftProduct : 1);
        }

        const right = [];
        for (let i = 0 ; i < nums.length; i++) {
            const rightProduct = nums.slice(i + 1, nums.length).reduce((x, acc) => acc * x, 1);
            right.push(i !== nums.length - 1 ? rightProduct : 1);
        }

        return left.map((el, i) => el * right[i]);
    }
}
