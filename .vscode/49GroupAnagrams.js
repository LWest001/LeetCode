/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach((word) => {
    let wordHash = 0;
    for (let i = 0; i < word.length; i++) {
      wordHash += word.charCodeAt(i)-"a".charCodeAt(0);
    }
    if (!map.get(wordHash)) {
      map.set(wordHash, [word]);
    } else {
      map.get(wordHash).push(word);
    }
  });
  let table = []
  map.forEach((anagramSet) => {
    table.push(anagramSet)
  });
  return table;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
