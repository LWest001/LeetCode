/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let res = new Map(); // mapping charCount to list of Anagrams
  let key = "";
  let val = "";
  let count = new Array(26).fill(0);
  strs.forEach((s) => {
    count.fill(0); // for all chars a - z
    for (let c = 0; c < s.length; c++) {
      count[s.charCodeAt(c) - "a".charCodeAt(0)] += 1;
    }
    key = count.toString();
    val = s;
    if (!res.get(key)) {
      res.set(key, [val]);
    } else {
      res.get(key).push(val);
    }
  });
  let table = [];
  res.forEach((anagramSet) => {
    table.push(anagramSet);
  });
  return table;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
