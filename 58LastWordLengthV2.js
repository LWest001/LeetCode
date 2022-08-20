/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    
    if (s.length === 1) {
        return 1
    }
    
    let chars = []
    let position = s.length-1

    while (s.charAt(position) === " ") {
        position--
    }

    while (s.charAt(position) != " " && s.charAt(position) != ''){
        chars.push(s.charAt(position));
        position--
    }
    return chars.length
};

let s ="a ";
lengthOfLastWord(s)