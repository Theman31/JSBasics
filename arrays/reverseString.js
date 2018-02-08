// Write a JavaScript function reverseString to reverse a given string.

function reverseString(val) {
  val = val.split('').reverse().join('');
  return val;
};

// DO NOT DELETE
module.exports = reverseString;
