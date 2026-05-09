class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Use string length to indicate how far to read
        let res = "";
        for (const str of strs) {
            res = res + String(str.length) + "|" + str;
        }
        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // "11|Hello World"
        const res = [];
        let i = 0;
        while (i < str.length) {
            const delimiterIdx = str.indexOf('|', i);
            const length = Number(str.substring(i, delimiterIdx));
            const substring = str.substring(delimiterIdx + 1, delimiterIdx + length + 1);
            res.push(substring);
            i = delimiterIdx + length + 1;
        }
        return res;
    }
}
