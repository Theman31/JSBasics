// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

function countString(string, letter) {
  var total = 0;
  string = string.toLowerCase();
  letter = letter.toLowerCase();
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      total++;
    }
  }
  return total;

};

// DO NOT DELETE
module.exports = countString;
