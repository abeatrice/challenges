/**
 * convert characters in given string to lower case
 * 
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {

    let array = [];

    Array.from(str).forEach(function (value, key) {
        let unicode = str.charCodeAt(key);
        if (unicode >= 65 & unicode <= 90) {
            array.push(String.fromCharCode(unicode + 32));
        } else {
            array.push(value);
        }
    });

    return array.join('');
};

console.log(toLowerCase("al&phaBET"));
console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));