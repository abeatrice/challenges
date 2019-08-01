/**
 * On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  
 * These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.
 * The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), 
 * then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by 
 * moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.
 * Return the number of pawns the rook can capture in one move. 
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let captures = 0;

    let rook = {
        'x': null,
        'y': null
    };

    for (y = 0; y < board.length; y++) {
        for (x = 0; x < board[y].length; x++) {
            if (board[y][x] === 'R') {
                rook.y = y;
                rook.x = x;
                break;
            }
        }
        if (rook.x) break;
    }

    console.log(rook);
    console.log(board);

    for (y = 0; y < board.length; y++) {
        for (x = 0; x < board[y].length; x++) {
            //if B between p and R: break
            if (board[y][x] === 'p' && (rook.x === x || rook.y === y)) {
                captures++;
            }
        }
        //if B between p and R: break        
    }

    return captures;
};

console.log(numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]));

console.log(numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]));