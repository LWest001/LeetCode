/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = nums.length-1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      let a = nums[i]
      nums[i] = nums[nums.length-1]
    }
  }
  return nums;
};

let nums = [1, 1, 2];
removeDuplicates(nums);
