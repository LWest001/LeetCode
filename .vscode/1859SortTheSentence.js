/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  s = s.split(" ");
  let original = new Array(s.length)
  for (let i = 0; i < s.length; i++){
    let idx = s[i][s[i].length-1]
    s[i] = s[i].slice(0,-1)
    original[idx-1] = s[i]
  }
  original = original.join(" ")
  return original;
};

sortSentence("is2 sentence4 This1 a3");