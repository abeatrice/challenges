/**
 * A self-dividing number is a number that is divisible by every digit it contains.
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 * Also, a self-dividing number is not allowed to contain the digit zero.
 * Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {

    let res = [];

    for (; left <= right; left++) {

        left = left.toString();

        isHit = true;

        for (m = 0; m < left.toString().length; m++) {

            //if i contains zero or is not divisible by itself
            if (left[m] == '0' || left % left[m] != '0') {
                isHit = false;
                break;
            }

        }

        if (isHit) {
            res.push(parseInt(left));
        }

    }

    return res;

};

console.log(selfDividingNumbers(1, 22));