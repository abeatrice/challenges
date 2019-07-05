/**
 * Given an array of sorted integers, 
 * return a sorted array of the squares of each number
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }

    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
console.log(sortedSquares([-3, -3, -2, 1])); //[1,4,9,9]