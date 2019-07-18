/**
 * Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
 * Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
 * If S[i] == "I", then A[i] < A[i+1]
 * If S[i] == "D", then A[i] > A[i+1]
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let nums = [];
    let res = [];

    for (i = 0; i <= S.length; i++) {
        nums.push(i);
    }

    for (i = 0; i <= S.length; i++) {
        if (S[i] === 'I') {
            res.push(nums.shift());
        } else {
            res.push(nums.pop());
        }
    }

    return res;
};

console.log(diStringMatch("IDID")); //[0,4,1,3,2]
console.log(diStringMatch("III")); //[0,1,2,3]
console.log(diStringMatch("DDI")); //[3,2,0,1]