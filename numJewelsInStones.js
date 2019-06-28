/**
 * Determine how many of the given stones 
 * are of one of the jewel types given  
 * 
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count = 0;

    for(i=0; i < stones.length; i++) {
        for(j=0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;;
                break;
            }
        }
    }

    return count;

};

console.log(numJewelsInStones("aA", "aAAbb"));
console.log(numJewelsInStones("abcABC", "aCba"));
console.log(numJewelsInStones("bT", "aAAbb"));
console.log(numJewelsInStones("aA", ""));
console.log(numJewelsInStones("", "aAAbb"));