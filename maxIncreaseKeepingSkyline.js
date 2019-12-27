/**
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let increase = 0;
    for (let i = 0; i < grid.length; i++) {
        let left = Math.max(...grid[i]);
        for (let j = 0; j < grid[i].length; j++) {
            console.log(left);
        }
    }
    return increase;
};

console.log(maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
])); //35
