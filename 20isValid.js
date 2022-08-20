/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split("");
  let stack = [];

  function isEqual(t1, t2) {
    return (
      (t1 === "(" && t2 === ")") ||
      (t1 === "[" && t2 === "]") ||
      (t1 === "{" && t2 === "}")
    );
  }

  function isOpening(token) {
    return token === "(" || token === "[" || token === "{";
  }

  function isClosing(token) {
    return token === ")" || token === "]" || token === "}";
  }

  for (let i = 0; i < s.length; i++) {
    if (isOpening(s[i])) {
      stack.push(s[i]);
    }

    if (isClosing(s[i])) {
      if (stack.length === 0) {
        return false;
      } else {
        if (!isEqual(stack[stack.length - 1], s[i])) {
          return false;
        }
      }
      stack.pop();
    }
  }
  if (stack.length != 0) {
    return false
  }
  return true;
};

let s = "()[]{}";
isValid(s);
