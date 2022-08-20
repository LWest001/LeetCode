/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

  let xString = x.toString();
  let xArray = xString.split("");
  let xReverseArray = xArray.reverse();
  let xReverse = xReverseArray.join('');

  return xString === xReverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1234));
