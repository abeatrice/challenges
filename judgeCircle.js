/**
 * There is a robot starting at position (0, 0), the origin, on a 2D plane. 
 * Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
 * The move sequence is represented by a string, and the character moves[i] represents its ith move. 
 * Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the 
 * origin after it finishes all of its moves, return true. Otherwise, return false. 
 * 
 * Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move 
 * to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of 
 * the robot's movement is the same for each move.
 */

/**
 * determine if 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    let map = new Map([
        ['U', 0],
        ['D', 0],
        ['L', 0],
        ['R', 0]
    ]);

    Array.from(moves).forEach(m => map.set(m, map.get(m) + 1));

    return map.get('U') == map.get('D') && map.get('L') == map.get('R');

};


console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));