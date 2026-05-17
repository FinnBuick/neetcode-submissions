class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindromeNaive(s) {
        // O(n) time, O(n) space
        const sanitised = s.replaceAll(/[^a-z0-9]/i, "").toLowerCase();
        const reversed = sanitised.split("").reverse().join("");
        return reversed === sanitised;
    }

    isAlphaNum(s) {
        return /[a-z0-9]/i.test(s);
    }

    isPalindrome(s) {
        // O(n) time, O(1) space
        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            while (i < j && !this.isAlphaNum(s[i])) {
                i++;
            }
            while (i < j && !this.isAlphaNum(s[j])) {
                j--;
            }
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
            i++;
            j--;       
        }
        return true;
    }
}
