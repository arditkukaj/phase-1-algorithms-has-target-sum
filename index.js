/*Write your algorithm here
  Create a function called hasTargetSum that checks for 2 numbers
  in the array that add up to a certain target number.
  Return true if two numbers add up to target number
  Else, return false.
 */

function hasTargetSum(array, target) {
  for (let i=0; i<array.length; i++) {
    const complement = target - array[i];
    for (let j = i+1; j<array.length; j++){
      if (array[j] === complement) 
      return true; 
    }
  }
  return false;
}

/* Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space: 0(n)
*/

/* Psuedocode
 run through the numbers in the array
  for the current number, find a complement number that adds to t arget (target - num = complement)
  check thru array again if any number is complement
  if so, return true
  if no number is found by the end of arary, return false
*/

/* Add written explanation of your solution here
  There is a loop that looks for the number in the array that
  if subtracted by the target, it equals the complement
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10, 8, 5], 12));
}

module.exports = hasTargetSum;
