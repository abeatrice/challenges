/**
 * return number of unique emails
 * from given email list
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {

    let unique = new Set();

    emails.forEach(email => {

        email = email.split('@');

        localName = email[0].split('').map(l => (l == '.') ? '' : l).join('').split('+');

        unique.add(`${localName[0]}@${email[1]}`);

    });

    return unique.size;

};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])); //2