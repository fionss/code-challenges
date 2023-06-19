// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My Solution
function findLongest(array){
 var newArr=array.slice().sort(function(a,b){
   return b.toString().length-a.toString().length;
 });
 return newArr[0];
}