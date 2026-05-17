class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindromeNaive(s) {
        // O(n) time, O(n) space
        const sanitised = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
        const reversed = sanitised.split("").reverse().join("");
        return reversed === sanitised;
    }

    isPalindrome(s) {
        s = s.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();

        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
