/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.split(" ")
    s = s.filter(word => word != '')
    const lastWord = s[s.length-1].split("")
    return lastWord.length
};

let s ="   fly me   to   the moon  ";
lengthOfLastWord(s)