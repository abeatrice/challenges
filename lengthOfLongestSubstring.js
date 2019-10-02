/**
 * Given a string, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let subString = new Map();
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (subString.has(s[j])) {
                subString.clear();
                break;
            }
            subString.set(s[j], s[j]);
            if (subString.size > longest) {
                longest = subString.size;
            }
        }
    }
    return longest;
};

console.log(lengthOfLongestSubstring(' ') === 1);
console.log(lengthOfLongestSubstring('au') === 2);
console.log(lengthOfLongestSubstring('dvdf') === 3);
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('pwwkew') === 3);