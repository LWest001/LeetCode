/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Split input string (s) into array of words
  s = s.split(" ");

  // For all words in string[] (s)...
  for (let i = 0; i < s.length; i++) {
    // ...split the word s[i] into characters...
    s[i] = s[i].split("");
    // ...and allocate temporary space for characters to populate in reverse order.
    let temp = [];

    // For all characters in string[] s[i], iterating from last to first...
    for (let j = s[i].length - 1; j >= 0; j--) {
      // push character s[i][j] to the temporary array.
      temp.push(s[i][j]);
    } // End inner loop. temp is now an array of the characters in reverse order.

    // Convert the array of reversed characters back to a "word" (string).
    temp = temp.join("");

    // Store the string at s[i].
    s[i] = temp;
  } // End outer loop. s is now an array of all the words with their characters reversed.

  // Convert array of reversed words back to a "sentence" (string).
  s = s.join(" ");

  return s;
};

let s = "Let's take LeetCode contest";
reverseWords(s);
