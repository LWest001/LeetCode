var maximumWealth = function (accounts) {

  result = 0;
  for (let i in accounts) {
      temp = 0;
    for (let j in accounts[i]) {
      temp += accounts[i][j];
    }
    if (temp > result) {
      result = temp;
    }
  }
  return result;
};
let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

maximumWealth(accounts);
