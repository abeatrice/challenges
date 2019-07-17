/**
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