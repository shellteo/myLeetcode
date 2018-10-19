/*
 * @Author: zhangxiang
 * @Date: 2018/10/10
 * @Last Modified by: zhangxiang
 * @Last Modified time: 2018/10/10
 */
/**
 * @param {string} s
 * @return {number}
 */
// 解法1：O(n^3)
var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    let n = s.length;
    for (var i = 0; i < n; i++) {
        for (var j = i+1; j <= n; j++) {
            if (allUnique(s, i, j)) {
                ans = Math.max(ans, j - i)
            }
        }

    }
    return ans;
};
var allUnique = function (s, start, end) {
    let set = new Set();
    for (let i = start; i < end; i++) {
        if(set.has(s[i]))
            return false
        set.add(s[i])
    }
    return true
};
// 解法2：O(2n)
var lengthOfLongestSubstring2 = function(s) {
    let n = s.length;
    let i=0,j=0,ans=0;
    let set = new Set();
    while (i<n && j<n) {
        if(!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j -i);
        } else {
            set.delete(s[i++]);
        }
    }
    return ans;
};

//解法3：O(n)
var lengthOfLongestSubstring3 = function(s) {
    let n = s.length;
    let i=0,j=0,ans=0;
    let map = new Map();
    for (; j < n; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        ans = Math.max(ans, j -i+1)
        map.set(s[j],j+1)
    }
    return ans;
}
console.log(lengthOfLongestSubstring3('abcadef'));

let map = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(map);

