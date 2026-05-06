class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // loop input 
        // sort each str
        // add sorted str as key and unsorted as value to hashmap
        // convert hashmap to nested array

        const map = new Map();
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');
            const newArr = [...map.get(sortedStr) ?? [], str]
            map.set(sortedStr,newArr)
        }
        return Array.from(map.values())
    }
}
