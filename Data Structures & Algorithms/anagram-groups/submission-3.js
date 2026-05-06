class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = new Map();
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');
            const newArr = [...map.get(sortedStr) ?? [], str]
            map.set(sortedStr,newArr)
        }
        return Array.from(map.values())
    }
}
