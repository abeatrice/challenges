/**
 * convert characters in given string to lower case
 * without using toLowerCase()
 * 
 * @param {string} str
 * @return {string}
 */
var toLowerCase = str => {

    return Array.from(str).map((value, key) => {
        let unicode = str.charCodeAt(key);
        if (unicode >= 65 & unicode <= 90) {
            return String.fromCharCode(unicode + 32);
        } else {
            return value;
        }
    }).join('');

};

console.log(toLowerCase("al&phaBET"));
console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));