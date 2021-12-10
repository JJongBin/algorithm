var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]+/gi, "").toUpperCase();
  const compare = s;

  return compare === s.split("").reverse().join("");
};
