// Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator

function evenOdd(arr1) {
  var evOdd =[];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 1) {
      evOdd[i] = "odd";
    }
    else {
      evOdd[i] = "even";
    }
  }
  return evOdd;
};

// DO NOT DELETE
module.exports = evenOdd;
