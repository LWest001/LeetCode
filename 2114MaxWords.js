/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result = 0;
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].split(" ");
    let temp = sentences[i].length
    if (temp > result) {
        result = temp;
    }
  }


  return result;
};

let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

mostWordsFound(sentences);
