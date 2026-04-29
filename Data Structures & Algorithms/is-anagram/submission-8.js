class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map()
        const tMap = new Map()

        this.initialiseMap(s, sMap);
        this.initialiseMap(t, tMap);

        return this.compareMaps(sMap, tMap);
    }

    /**
     * @param {Map} a
     * @param {Map} b
     * @return {boolean}
     */
    compareMaps(a, b){
        let testVal;
        if (a.size !== b.size){
            return false;
        }

        for (const [key, val] of a) {
            testVal = b.get(key);

            if (testVal !== val || (testVal === undefined && !b.has(key))) {
                return false
            }
        }
        return true
    }
    
    /**
     * @param {string} s
     * @param {Map} m
     */
    initialiseMap(s, m) {
        for (let i = 0; i < s.length; i++) {
            const curr = s.charAt(i);
            if (!m.has(curr)) {
                m.set(curr, 1);                
            } else {
                m.set(curr, m.get(curr) + 1);
            }
        }
    }
}
