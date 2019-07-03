/**
 * find element in array that is repeated
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let el = null;
    A.forEach((n, i) => {
        A.forEach((m, j) => {
            if (n === m && i !== j) {
                el = n;
            }
        });
    });

    return el;
};

console.log(repeatedNTimes([1, 2, 3, 3])); //3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); //2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); //5