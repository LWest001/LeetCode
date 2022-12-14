/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  nums.sort();
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; nums[j] === nums[i]; j++) {
      result++;
    }
  }
  return result;
};
const nums = [1, 2, 3, 1, 1, 3];
numIdenticalPairs(nums);
