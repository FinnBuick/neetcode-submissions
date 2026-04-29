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
          const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (hash.hasOwnProperty(complement)) {
            return [hash[complement], i];
        }
        hash[current] = i;
    }
    return null;
    }
}
