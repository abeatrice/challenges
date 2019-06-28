/**
 * Determine how many of the given stones 
 * are of one of the jewel types given  
 * 
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;

console.log(numJewelsInStones("aA", "aAAbb"));
console.log(numJewelsInStones("abcABC", "aCba"));
console.log(numJewelsInStones("bT", "aAAbb"));
console.log(numJewelsInStones("aA", ""));
console.log(numJewelsInStones("", "aAAbb"));