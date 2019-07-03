/**
 * find element in array that is repeated
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    for (i = 0; i < A.length; i++) {
        for (j = i + 1; j < A.length; j++) {
            if (A[i] == A[j]) {
                return A[i];
            }
        }
    }
};

console.log(repeatedNTimes([1, 2, 3, 3])); //3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); //2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); //5