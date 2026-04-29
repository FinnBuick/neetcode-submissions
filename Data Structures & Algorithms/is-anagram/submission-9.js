class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Hash map based character frequency analysis
        // Sort based solution
        // Plan: Try sort based first

        if (s.length !== t.length) {
            return false;
        }

        const sSort = s.split('').sort().join('');
        const tSort = t.split('').sort().join('');

        for (let i = 0; i < sSort.length; i++) {
            if (sSort[i] !== tSort[i]) {
                return false;
            }
        }
        return true;
    }
}
