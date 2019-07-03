/**
 * flip an image pixels horizontally and invert it
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    return image.map(row => row.reverse().map(pixel => (pixel) ? 0 : 1));
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])); //[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 1, 1, 1 ] ]