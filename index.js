function isPalindrome(word) {
  const len = word.length;
  const mid = Math.floor(len/2);

  for ( let i = 0; i < mid; i++ ) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }

  return true;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
