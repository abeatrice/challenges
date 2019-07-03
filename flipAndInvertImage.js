/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let newImage = [];
    image.forEach(row => {
        let newRow = [];
        row.forEach(pixel => {
            newRow.unshift((pixel) ? 0 : 1);
        });
        newImage.push(newRow);
    });
    return newImage;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));