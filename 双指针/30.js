/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = [];
    let n = s.length, m = words.length;
    if(n<=0 || cnt<=0) return res;
    let map = new Map();
    for (let i = 0; i < cnt; i++) {
        map.set(w, (map.get(w)||0) +1)
    }

    let wl = words[0].length;
    for (let i = 0; i < wl; i++) {
        let temp  = new Map();
        let count = 0;
        let lo = i;
        for (let hi = i; hi+wl <= n; hi+=wl) {
            let sHi = s.substring(hi, hi+wl);
            if(map.has(sHi)){

            }
        }
    }
};