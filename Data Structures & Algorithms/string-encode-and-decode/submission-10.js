class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const str of strs) {
            res += String(str.length) + "|" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            const delimIdx = str.indexOf('|', i);
            const length = Number(str.substring(i, delimIdx));
            const word = str.substring(delimIdx + 1, delimIdx + 1 + length);
            res.push(word);
            i = delimIdx + length + 1;
        }
        return res;
    }
}
