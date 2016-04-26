'use strict';

module.exports = function (arr, weights) {

  if (!arr || !weights) {
    throw new TypeError("Arguments must all be array");
  }

  if (arr.length !== weights.length) {
    throw new RangeError("Length of array and weights must match");
  }

  // Handle weights that are less or equal to zero.
  for (var weightIndex = weights.length - 1; weightIndex >= 0; --weightIndex) {
    // If the weight is less or equal to zero, remove it and the value.
    if (weights[weightIndex] <= 0) {
      arr.splice(weightIndex, 1);
      weights.splice(weightIndex, 1);
    }
  }

  var sum = weights.reduce(function (total, weight) {
    return total + weight;
  }, 0);

  // get an index
  var selected = Math.random() * sum;

  var total = 0;
  var chosen;
  // Using some() here so we can bail as soon as we get our match
  weights.some(function (weight, index) {
    if (selected <= total + weight) {
      chosen = arr[index];
      return true;
    }
    total += weight;
    return false;
  });

  return chosen;
};
