/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (numbers.length < 2) {
    return [];
  }
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    }
    map.set(numbers[i], i);
  }
  return [];
};
