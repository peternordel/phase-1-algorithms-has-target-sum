//writing out solution from the video using an object and complement

function hasTargetSum(array, target) {
  const seenNumbers = {};
  
  for (const number of array) {
    const complement = target - number;

    if(complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  //return false if none of the above loops returned true
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  1. starting with first number, iterate over array (for loop w/ i)
  2. inside each iteration, iterate over the array starting with next index (for loop w/ j)
  3. return true if we find a match, return false if we do not find a match
*/

/*
  Add written explanation of your solution here
  I feel like this is answered above in the pseudo code/comments

  It's worth mentioning that I tried optimizing my solution by sorting the array, then finding the index where it is greater than the target (so we can ignore anything after that index, since we are looking for pairs), then starting the first number at the beginning and the second number at the end, then breaking the loop if our sum is less than the target. I feel like this would have been optimized, but I could not get the code to work.
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
}

module.exports = hasTargetSum;
