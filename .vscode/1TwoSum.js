/** Given an array of integers nums and an integer target, 
 return indices of the two numbers such that they add up to target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 You can return the answer in any order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const result = [];
  if (nums.length < 2) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        result.push(i);
        result.push(j);
      } else {
        continue;
      }
    }
  }
  return result;
};

const nums = [0, 4, 3, 0];
twoSum(nums, 0);
