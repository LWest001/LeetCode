/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const d1 = Math.floor(num / 1000);
  num -= d1 * 1000;
  const d2 = Math.floor(num / 100);
  num -= d2 * 100;
  const d3 = Math.floor(num / 10);
  num -= d3 * 10;
  const d4 = num;

  let nums = [d1, d2, d3, d4];
  nums.sort();

  const new1 = nums[0] * 10 + nums[2];
  const new2 = nums[1] * 10 + nums[3];
  const result = new1 + new2;
  return result;
};

let num = 2932;
minimumSum(num);
