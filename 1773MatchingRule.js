/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let result = 0;
  if (ruleKey === "type") {
    ruleKey = 0
  } else if (ruleKey === "color") {
    ruleKey = 1
  } else if (ruleKey === "name") {
    ruleKey = 2
  } 

  for (i in items) {
    if (items[i][ruleKey] === ruleValue){
        result++
    }
  }

  return result;
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "color";
const ruleValue = "silver";

countMatches(items, ruleKey, ruleValue)