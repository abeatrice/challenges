
/**
 * Given words first and second, consider occurrences in some text of the form "first second third", 
 * where second comes immediately after first, and third comes immediately after second.
 * For each such occurrence, add "third" to the answer, and return the answer.
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let result = [];

    text = text.split(" ");

    for (i = 0; i < text.length; i++) {
        if (text[i - 1] === second && text[i - 2] === first) {
            result.push(text[i]);
        }
    }

    return result;

};

console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
console.log(findOcurrences("we will we will rock you", "we", "will"));