// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// My Solution
const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  var count =0;
  for(let i = begin; i <= end; i += step) {
    count += i;
  }
  return count;
};