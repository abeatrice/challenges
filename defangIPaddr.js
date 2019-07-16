/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    return Array.from(address).map(c => { if (c == '.') { return '[.]' } else { return c } }).join('');
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));