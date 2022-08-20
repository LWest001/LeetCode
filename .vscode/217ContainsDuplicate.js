/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let result = false;
  if (nums.length < 2) {
    return result;
  }
  nums.sort()
  let map = new Map();
  nums.forEach((n) => {
    if (map.has(n)) {
      result = true;
      return result;
    } else {
      map.set(n, 0);
    }
  });
  return result;
};

let nums = [1, 2, 3, 1];

containsDuplicate(nums);
