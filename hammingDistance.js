/**
 * convert decimal to binary
 * @param {number} dec 
 */
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

/**
 * https://en.wikipedia.org/wiki/Hamming_distance
 * The Hamming distance between two integers is the number of positions 
 * at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    x = Array.from(dec2bin(x).toString().padStart(32, '0'));
    y = Array.from(dec2bin(y).toString().padStart(32, '0'));

    let distance = 0;

    x.forEach((n, i) => {
        if (n !== y[i]) {
            distance++;
        }
    });

    return distance;

};



console.log(hammingDistance(1, 4));