function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  iterate over the input word from the begining upto the middle of th word
  compare the first and the last character in the input word
    if the first and the last characters are different
      return false and exit
    else keep comparing until you get to the middle of the word:
      return true
*/

/*
  Add written explanation of your solution here
  ispalindrom compares i and j where i iterates from the start of the word while j iterates from the end of the word

*/

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
