/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length - 1;
  digits[n]++;
  for (let i = n; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      digits[i - 1]++;
    } else {
      break;
    }
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 9, 9, 9, 9]);
