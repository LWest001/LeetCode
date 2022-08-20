/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  s = s.split("");
  let result = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  result = result.join('')
  return result;
};

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
// co indices = [c, o, d, e, l, e, e, t]
restoreString(s, indices);
