/**
 * 
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

    let morseLetters = new Map([
        ['a', '.-'],
        ['b', '-...'],
        ['c', '-.-.'],
        ['d', '-..'],
        ['e', '.'],
        ['f', '..-.'],
        ['g', '--.'],
        ['h', '....'],
        ['i', '..'],
        ['j', '.---'],
        ['k', '-.-'],
        ['l', '.-..'],
        ['m', '--'],
        ['n', '-.'],
        ['o', '---'],
        ['p', '.--.'],
        ['q', '--.-'],
        ['r', '.-.'],
        ['s', '...'],
        ['t', '-'],
        ['u', '..-'],
        ['v', '...-'],
        ['w', '.--'],
        ['x', '-..-'],
        ['y', '-.--'],
        ['z', '--..']
    ]);

    let morseWords = new Map();

    words.forEach(word => {
        let glyph = Array.from(word).map(letter => morseLetters.get(letter)).join('');

        morseWords.set(glyph);
    });

    return morseWords.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));