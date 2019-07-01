/**
 * convert characters in given string to lower case
 * without using toLowerCase()
 * 
 * @param {string} str
 * @return {string}
 */
var toLowerCase = str => {

    return Array.from(str).map((char, index) => {
        let unicode = str.charCodeAt(index);
        return (unicode >= 65 & unicode <= 90)
            ? String.fromCharCode(unicode + 32)
            : char;
    }).join('');

};

console.log(toLowerCase("al&phaBET"));
console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));