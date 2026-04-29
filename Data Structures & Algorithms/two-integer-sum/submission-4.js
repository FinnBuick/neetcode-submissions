class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // on each iteration keep track of the complement and its index
        // check if the complement has been seen in the map
        // if so, return the current index and the one stored in the array
        const complements = new Map();

        for (let i = 0; i < nums.length; i++){
            const comp = target - nums[i];
            if (complements.has(nums[i])) {
                return [i, complements.get(nums[i])];
            }
            complements.set(comp, i);
        }

        return [-1, -1]
    }
}
