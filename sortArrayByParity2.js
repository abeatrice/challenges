var even = function (n) {
    return n % 2 == 0;
}

/**
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
 * Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 * You may return any answer array that satisfies this condition.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    for (i = 0; i < A.length; i++) {
        if (even(i) && even(A[i])) {
            continue;
        }
        if (!even(i) && !even(A[i])) {
            continue;
        }

        for (j = i + 1; j < A.length; j++) {
            if ((even(i) && even(A[j])) || (!even(i) && !even(A[j]))) {
                var temp = A[i];
                A[i] = A[j];
                A[j] = temp;
                break;
            }
        }
    }
    return A;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));