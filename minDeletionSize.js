/**
 * We are given an array A of N lowercase letter strings, all of the same length.
 * Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.
 * For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"].  (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)
 * Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.
 * Return the minimum possible value of D.length.
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {

    let count = 0;

    //iterate over columns in words
    for (let column = 0; column < A[0].length; column++) {

        //iterate over words
        for (let word = 0; word < A.length; word++) {

            //if next word exists and the letter in the column of this word is > letter in next column
            if (typeof A[word + 1] !== 'undefined' && (A[word][column] > A[word + 1][column])) {

                //column needs to be deleted
                count++;

                //exit iteration, this column already determined to be deleted.
                break;

            }

        }

    }

    return count;
};

console.log(minDeletionSize(["cba", "daf", "ghi"])); //1
console.log(minDeletionSize(["a", "b"])); //0
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); //3