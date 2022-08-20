/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Function that takes in a string and an output array, and records the frequency of each character in the string to the output array
function mapToTable(string, output) {
  for (let char in string) {
    key = string[char];
    if (output[key]) {
      output[key]++;
    } else {
      output[key] = 1;
    }
  }
}

function mapComparison(string, map) {
  for (let char in string) {
    let key = string[char];
    if (map[key]) {
      map[key]--;
    } else {
      return false;
    }
  }
  return true;
}

var isAnagram = function (s, t) {
  // Create two tables to log the character count of each input string
  let sTable = {};

  // the character code for 'a'
  //   const aCode = "a".charCodeAt(0);

  mapToTable(s, sTable);

  result =
    mapComparison(t, sTable) && !Object.values(sTable).some((e) => e != 0);
  return result;
};

let s = "anagram";
let t = "nagaram";

isAnagram(s, t);
