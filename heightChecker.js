/**
 * Students are asked to stand in non-decreasing order of heights for an annual photo.
 * Return the minimum number of students not standing in the right positions.  
 * (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    let orgin = Array.from(heights);
    let count = 0;
    let temp = 0;

    for (i = 0; i < heights.length; i++) {
        for (j = heights.length - 1; j > i; j--) {
            if (heights[i] > heights[j]) {
                temp = heights[i];
                heights[i] = heights[j];
                heights[j] = temp;
            }
        }
    }

    for (i = 0; i < heights.length; i++) {
        if (heights[i] !== orgin[i]) {
            count++;
        }
    }

    return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); //3