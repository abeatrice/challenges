/**
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
 * Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 * You may return any answer array that satisfies this condition.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let even = [];
    let odd = [];
    let res = [];

    A.forEach(n => (n % 2 == 0) ? even.push(n) : odd.push(n));

    for (i = 0; i < A.length; i++) {
        if (i % 2 == 0) {
            res.push(even.pop());
        } else {
            res.push(odd.pop());
        }
    }

    return res;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));