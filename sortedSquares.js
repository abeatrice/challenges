/**
 * Given an array of sorted integers, 
 * return a sorted array of the squares of each number
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let squares = [];

    A.forEach(n => {
        squares.push(n * n);
    });

    for (i = 0; i < squares.length; i++) {
        for (j = squares.length - 1; j >= i; j--) {
            if (squares[i] > squares[j]) {
                let temp = squares[i];
                squares[i] = squares[j];
                squares[j] = temp;
            }
        }
    }

    return squares;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); //[ 16, 1, 0, 9, 100 ] [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
console.log(sortedSquares([-3, -3, -2, 1])); //[1,4,9,9]