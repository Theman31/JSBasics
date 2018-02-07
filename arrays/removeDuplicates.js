// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

function removeDuplicates(arr) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);
      }
  }
  return arr
};

// DO NOT DELETE
module.exports = removeDuplicates;
