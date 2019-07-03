/**
 * sort given array by even numbers followed by odd numbers
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let even = [];
    let odd = [];
    A.forEach(n => {
        if (n % 2 === 0) {
            even.push(n);
        } else {
            odd.push(n);
        }
    });

    return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4]));