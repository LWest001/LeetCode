/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let hashmap = new Map()
    words.forEach(word => {
        hashmap[word] = word.split('')
    })
};
const words = ["cat", "bt", "hat", "tree"]
const chars = "atach"

countCharacters (words,chars)