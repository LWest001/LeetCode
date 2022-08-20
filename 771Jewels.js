/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  jewels = jewels.split("");
  stones = stones.split("");
  let result = 0;
  for (let jewel in jewels) {
    for (let stone in stones) {
      if ((jewels[jewel] === stones[stone])) {
        result++;
      }
    }
  }
  return result;
};

let jewels = "aA"
let stones = "aAAbbbb"

numJewelsInStones(jewels, stones)